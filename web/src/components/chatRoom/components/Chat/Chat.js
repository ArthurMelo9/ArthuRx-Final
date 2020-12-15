import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import fire from '../../../doctors/fire';

import './Chat.css';

const ENDPOINT = 'http://localhost:5000';
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('doc');
  const [room, setRoom] = useState('1');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name: nameParam, room: roomParam } = queryString.parse(location.search);
    setName(nameParam);
    setRoom(roomParam);

    const ref = fire.firestore().collection('chats').doc(roomParam)
    
    const unsubscribe = ref.onSnapshot((doc) => {
      if (!doc.exists) {
        return;
      }

      setMessages(doc.data().messages || []);
    });

    // socket = io(ENDPOINT);
    // socket.on('connect', () => {
    //   console.log('===> connected to server');
    // });

    // socket.emit('join', { name, room }, (error) => {
    //   console.log('===> join');
    //   if (error) {
    //     alert(error);
    //   }
    // });

    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   socket.on('message', message => {
  //     setMessages(messages => [...messages, message]);
  //   });

  //   socket.on("roomData", ({ users }) => {
  //     setUsers(users);
  //   });
  // }, []);

  const sendMessage = async (event) => {
    console.log('===> he is here');
    event.preventDefault();
    try {

      if (message) {
        const ref = fire.firestore().collection('chats').doc(room);
        await ref.set({ messages: [
          ...messages,
          { user: name, text: message }
        ]}, { merge: true });
        setMessage('');
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
}

export default Chat;

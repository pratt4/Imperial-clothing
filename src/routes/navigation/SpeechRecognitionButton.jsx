/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faStop } from '@fortawesome/free-solid-svg-icons';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const IconButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;


const SpeechRecognitionDialog = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -25%);
  background-color: white;
  padding: 20px;
  border: 1px solid black;
  width: 50%;
  display: ${props => props.open ? 'block' : 'none'};
`;

const SpeechRecognitionButton = () => {

  const [dialogOpen, setDialogOpen] = useState(false);
  
 
  const navigate = useNavigate();

  
  const phraseToRoute = {
    'go to shop': '/shop',
    'go to shop.': '/shop',
    'go to home': '/',
    'go to home.': '/',
    'sign in': '/auth',
    'sign in.': '/auth',
    'show me some hats': '/shop/hats',
    'show me some hats.': '/shop/hats',
    'hats': '/shop/hats',
    'hats.': '/shop/hats',
    'Hats.': '/shop/hats',
    'show me some jackets': '/shop/jackets',
    'jackets': '/shop/jackets',
    'show me some sneakers': '/shop/sneakers',
    'sneakers': '/shop/sneakers',
    'Sneakers': '/shop/sneakers',
    'Sneakers.': '/shop/sneakers',
    'show me all items': '/shop',
    'go to cart': '/checkout',
    'Check out.': '/checkout',
    'check out': '/checkout'
  };

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    
    for (let phrase in phraseToRoute) {
      if (transcript.includes(phrase)) {
        console.log(`Navigating to ${phraseToRoute[phrase]}...`);
        navigate(phraseToRoute[phrase]);
        resetTranscript(); 
      }
    }
  }, [transcript, navigate, phraseToRoute, resetTranscript]); 

  
  const startSpeechRecognition = () => {
    SpeechRecognition.startListening({ continuous: true });
    setDialogOpen(true);
  };

 
  const stopSpeechRecognition = () => {
    SpeechRecognition.stopListening();
    setDialogOpen(false);
    resetTranscript();
  };

  return (
    <>
      <IconButton onClick={startSpeechRecognition}>
        <FontAwesomeIcon icon={faMicrophone} />
      </IconButton>
      <IconButton onClick={stopSpeechRecognition}>
        <FontAwesomeIcon icon={faStop} />
      </IconButton>
      <SpeechRecognitionDialog open={dialogOpen}>
        {listening ? 'Listening...' : 'Stopped'}
        <br />
        {transcript || 'Say "show me some hats/jackets/sneakers .... (ps : This doesnt work in mozilla firefox 😢)" '}
      </SpeechRecognitionDialog>
    </>
  );
};

export default SpeechRecognitionButton;

import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

const Client = () => {
    const videoRef = useRef(null);
    const peerConnectionRef = useRef(null);
    const [roomId, setRoomId] = useState('');

    useEffect(() => {
        socket.on('receive_offer', async (offer) => {
            peerConnectionRef.current = new RTCPeerConnection();
            peerConnectionRef.current.onicecandidate = (event) => {
                if (event.candidate) {
                    socket.emit('ice_candidate', { candidate: event.candidate, roomId });
                }
            };

            peerConnectionRef.current.ontrack = (event) => {
                videoRef.current.srcObject = event.streams[0];
            };

            await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(offer));
            const answer = await peerConnectionRef.current.createAnswer();
            await peerConnectionRef.current.setLocalDescription(answer);
            socket.emit('answer', { answer, roomId });
        });

        socket.on('receive_ice_candidate', (candidate) => {
            peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(candidate));
        });

        return () => {
            socket.off('receive_offer');
            socket.off('receive_ice_candidate');
        };
    }, [roomId]);

    const joinRoom = () => {
        const room = prompt('Enter room ID');
        setRoomId(room);
        socket.emit('join_room', room);
    };

    return (
        <div>
            <button onClick={joinRoom}>Tham Gia Phòng</button>
            <video ref={videoRef} autoPlay playsInline style={{ width: '600px' }}></video>
        </div>
    );
};

export default Client;

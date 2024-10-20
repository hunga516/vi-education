import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

const Host = () => {
    const videoRef = useRef(null);
    const peerConnectionRef = useRef(null);
    const [roomId, setRoomId] = useState('');

    useEffect(() => {
        socket.on('receive_answer', (answer) => {
            const remoteDesc = new RTCSessionDescription(answer);
            peerConnectionRef.current.setRemoteDescription(remoteDesc);
        });

        socket.on('receive_ice_candidate', (candidate) => {
            peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(candidate));
        });

        return () => {
            socket.off('receive_answer');
            socket.off('receive_ice_candidate');
        };
    }, []);

    const createRoom = async () => {
        const room = prompt('Enter room ID');
        setRoomId(room);
        socket.emit('join_room', room);

        // Thiết lập kết nối WebRTC
        peerConnectionRef.current = new RTCPeerConnection();
        peerConnectionRef.current.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit('ice_candidate', { candidate: event.candidate, roomId: room });
            }
        };

        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        videoRef.current.srcObject = stream;
        stream.getTracks().forEach((track) => {
            peerConnectionRef.current.addTrack(track, stream);
        });

        const offer = await peerConnectionRef.current.createOffer();
        await peerConnectionRef.current.setLocalDescription(offer);
        socket.emit('offer', { offer, roomId: room });
    };

    return (
        <div>
            <button onClick={createRoom}>Tạo Phòng</button>
            <video ref={videoRef} autoPlay playsInline style={{ width: '600px' }}></video>
        </div>
    );
};

export default Host;

import { useEffect, useState } from 'react';
import { socket } from './../socket.js';

function useSocketConnection() {
    const [newImageData, setNewImageData] = useState<any>(null);
    useEffect(() => {
        socket.on('connect', () => {
            socket.on('new-image', (data: any) => {
                setNewImageData(data);
            });
        });
        return () => {
            socket.off('connect');
        }
    }, []);

    return { newImageData }
}   

export default useSocketConnection;
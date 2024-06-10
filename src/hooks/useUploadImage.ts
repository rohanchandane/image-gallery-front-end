import { useEffect, useState } from "react";

function useUploadImage() {
    const [isUploading, setIsUploading] = useState(false); 
    const [formData, setFormData] = useState<FormData | null>(null);


    useEffect(() => {
        if( formData ) {
            try {
                const uploadImage = async () => {   
                    const response = await fetch('http://localhost:3000/upload', {
                        method: 'POST',
                        body: formData
                    });
        
                    if (!response.ok) {
                        alert('Upload failed');
                    } else {
                        console.log('Upload successful');
                    }
                }
    
                uploadImage();
            } catch (error) {
                console.log(error);
                alert('Upload failed. Please try again.');
            } finally {
                setIsUploading(false);
            }    
        }
    }, [formData]);
    


    return { setFormData, isUploading };
}

export default useUploadImage;
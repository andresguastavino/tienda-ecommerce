'use client';

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../clients/firebaseClient';

const emptyForm = {
    name: '',
    type: '',
    price: 0.0,
    quantity: 0,
    imagen: ''
}

export default function NewProduct() {

    const [form, setForm] = useState(emptyForm);
        
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            await addDoc(collection(db, 'productos'), {
                ...form,
                timestamp: Date.now()
            });

            setForm(emptyForm);
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 border rounded">
            <input
                type="text"
                name="name"
                placeholder="NombProduct namere"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
            />
            <input
                type="number"
                name="price"
                placeholder="Precio"
                value={form.price}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
                Enviar
            </button>        
        </form>
    );
}
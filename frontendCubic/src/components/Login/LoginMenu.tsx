"use client";

import { useState } from 'react';

export default function LoginMenu() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {

            console.log('Dados enviados:', formData);

            const response = await fetch('http://localhost:3001/public/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            console.log('Resposta completa:', {
                status: response.status,
                statusText: response.statusText,
                headers: Object.fromEntries(response.headers.entries()),
                body: data
            });

            if (!response.ok) {
                throw new Error(data.message || 'Erro ao fazer login');
            }

            // Login bem-sucedido - redirecionar ou armazenar token
            console.log('Login successful:', data);
            localStorage.setItem('authToken', data);
            console.log('token saved:', localStorage.getItem('authToken'));
            window.location.href = '/dashboard';
            
        } catch (err) {
            console.error('Erro durante o login:', err);
            setError(err instanceof Error ? err.message : 'Erro desconhecido');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit} className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
            <legend className="fieldset-legend justify-center">Login</legend>

            <label className="fieldset-label">Email</label>
            <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label className="fieldset-label">Password</label>
            <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />

            {error && <div className="text-red-500 mt-2">{error}</div>}

            <button
                type="submit"
                className="btn btn-neutral mt-4"
                disabled={loading}
            >
                {loading ? 'Carregando...' : 'Login'}
            </button>
        </form>
    );
}
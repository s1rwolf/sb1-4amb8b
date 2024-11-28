import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  if (isAuthPage) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">Algor.AI</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="secondary" className="px-6 py-2">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="px-6 py-2">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
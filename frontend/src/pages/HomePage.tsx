import reactLogo from '../assets/react.svg'
import adonisjsLogo from '../assets/adonisjs.svg'
import viteLogo from '../assets/vite.svg'
import postgreSQLLogo from '../assets/postgresql.png'
import wrapGif from '../assets/wrap.webp'
import alex from '../assets/alex.jpg'
import { Api } from '@/components/api'
import { Github, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export const HomePage = () => {
  return (
    <div className='flex flex-row h-screen w-screen items-center justify-center'>
        <Link to="/login" className='absolute top-4 right-4'>
          <Button>Go to login</Button>
        </Link>
        <div className='flex flex-col'>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-bold'>VRAP Stack</h1>
            <div className='flex flex-row'>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://adonisjs.com/" target="_blank">
                <img src={adonisjsLogo} className="logo adonisjs" alt="AdonisJS logo" />
            </a>
            <a href="https://www.postgresql.org/" target="_blank">
                <img src={postgreSQLLogo} className="logo postgresql" alt="PostgreSQL logo" />
            </a>
            </div>
            <h1>Vite + React + AdonisJS + PostgreSQL</h1>
            <a href="https://github.com/unkobweb/create-vrap-app" className='mx-auto' target="_blank">
            <img src={wrapGif} className="w-32 h-32 mt-6" alt="Wrap gif" />
            </a>
            <div className="card">
            <p className="read-the-docs">
                My ingredients, your project.
            </p>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <Api />
            <div className='border border-slate-600 rounded-lg flex flex-row'>
            <img src={alex} alt="Photo de moi" className='h-24 rounded-l-lg' />
            <span className='flex flex-col text-secondary-foreground items-start justify-around ml-4'>
                <h2>Created by Alexandre SIEG</h2>
                <div className='flex flex-row gap-4'>
                <a className='flex flex-row items-center hover:text-blue-500 transition-colors' href="https://twitter.com/unkobweb" target='_blank'>
                    <Twitter size={24} /> @unkobweb
                </a>
                <a className='flex flex-row items-center hover:text-blue-500 transition-colors' href="https://github.com/unkobweb" target='_blank'>
                    <Github size={24} /> @unkobweb
                </a>
                </div>
            </span>
            </div>
        </div>
        </div>
    </div>
    )
}
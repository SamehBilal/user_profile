import NextAuth from "next-auth/next"
import { NextAuthOptions } from 'next-auth'
import { PrismaClient } from '@prisma/client'
import GoogleProvider from "next-auth/providers/google"
import DiscordProvider from "next-auth/providers/discord"

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const prisma = new PrismaClient()

export default NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
    GoogleProvider({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET
    }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if(!profile.email){
                throw new Error('No Profile')
            }
            await prisma.user.upsert({
                where: {
                    email: profile.email
                },
                create: {
                    email: profile.email,
                    name: profile.name
                },
                update: {
                    name: profile.name
                }
            })
        }
    }
})
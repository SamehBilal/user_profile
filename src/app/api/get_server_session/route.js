// import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {

  // const session = await getServerSession(req, res);

  // if (!session) {
    res.status(401).json({ message: 'You must be signed in to view this protected content.' });
    return;
  // }

  // // If user is authenticated, return API data
  // res.status(200).json({
  //   message: 'Protected data available for signed-in users.'
  // })
}
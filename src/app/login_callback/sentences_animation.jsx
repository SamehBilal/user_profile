import {useEffect} from 'react'
import gsap from 'gsap'
import SplitType from 'split-type';
// import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
// import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
// import ScrambleTextPlugin from 'gsap-trial/ScrambleTextPlugin';
// import ScrambleTextPlugin from 'gsap/src/ScrambleTextPlugin';
// import ScrambleTextPlugin from 'gsap/dist/ScrambleTextPlugin';
// import ScrambleTextPlugin from 'gsap-trial/src/ScrambleTextPlugin';
// import ScrambleTextPlugin from 'gsap-trial/dist/ScrambleTextPlugin';
// import { ScrambleTextPlugin } from 'gsap/all';

function SentencesAnimation({sentences=[]}) {

    useEffect(() => {
        // // gsap.registerPlugin(ScrambleTextPlugin)
        // const sentences = gsap.utils.toArray(".sentence");
        // console.log('sentences', sentences)
    
        // sentences.forEach((sentence, index)=>{
        // // const split = new SplitText(sentence, { type: 'words' });
        //     gsap.to(sentence, {
        //         duration: 3, 
        //         scrambleText:{text: sentences[index], 
        //         revealDelay:0.5,
        //         tweenLength:false}})
        // })

        const splitTypes = document.querySelectorAll('.sentence')
        splitTypes.forEach((word, i)=>{
            const text = new SplitType(word, {types: 'words'})

            gsap.from(text.words, {
                duration: 2, 
                y: 50,
                opacity: 0,
                color: 'black',
                stagger: 0.2,
            }, 3*i)
        })

    }, []);

  return (
    <div className='sentences text-white text-4xl space-y-4'>
        {sentences.map((_, i)=>{
            return <p key={i} className='sentence'>{_}</p>
        })}
    </div>
  )
}

export default SentencesAnimation
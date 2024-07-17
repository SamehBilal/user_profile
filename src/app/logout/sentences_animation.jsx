import {useEffect} from 'react'
import gsap from 'gsap'
import SplitType from 'split-type';

function SentencesAnimation({sentences=[]}) {

    useEffect(() => {
        const splitTypes = document.querySelectorAll('.sentence')
        splitTypes.forEach((word, i)=>{
            const text = new SplitType(word, {types: 'words'})

            gsap.from(text.words, {
                duration: 2, 
                y: 50,
                opacity: 0,
                color: 'black',
                stagger: 0.2,
                repeat: -1,
                repeatDelay: 2*i,
                delay: 0
            }, 4*i)
        })

    }, []);

  return (
    <div className='sentences text-white text-4xl space-y-10 max-h-14 overflow-hidden'>
        {sentences.map((_, i)=>{
            return <p key={i} className='sentence animate-slide-up text-center'>{_}</p>
        })}
    </div>
  )
}

export default SentencesAnimation
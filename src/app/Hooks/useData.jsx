import { data } from "../sessionList"

// export const useData = () => {

//     const sessions = data.map(s => s);
//     const classList = data.map(l => {
//         return l.classList.map(classList => classList)
//     });

//     const lessonsLinks = data.map(l => l.text);
//     console.log(classList.map(e => e.text), "classList")

//     const questions = data.map(session => {
//         return session.classList.map(classList => {
//             return classList.text


//         })
//     });

//     return {
//         classList,
//         sessions,
//         lessonsLinks,
//         questions,
//     }
// }
import { useMemo } from 'react';



export const useData = () => {
    const sessions = useMemo(() => data.map(session => ({
        id: session.id,
        href: session.href,
        text: session.text,
        sessionNumber: session.sessionNumber,
    })), [data]);

    const classList = useMemo(() => data.flatMap(session =>
        session.classList.map(classItem => ({
            text: classItem.text,
            classNumber: classItem.classNumber,
            sessionNumber: classItem.sessionNumber,
            slideList: classItem.slideList.map(slide => ({
                text: slide.text,
                questionImagePath: slide.questionImagePath,
                hintImagePath: slide.hintImagePath,
                questionAudioPath: slide.questionAudioPath,
                hintAudioPath: slide.hintAudioPath,
                options1: slide.options1,
                options2: slide.options2,
                bottomText: slide.bottomText,
            }))
        }))
    ), [data]);

    const lessonsLinks = useMemo(() => data.map(session => session.text), [data]);

    const questions = useMemo(() => data.map(session =>
        session.classList.map(classItem =>
            classItem.slideList.map(slide => slide.text)
        )
    ), [data]);

    return {
        classList,
        sessions,
        lessonsLinks,
        questions,
    };
};
import Accordion from "../components/Accordion"

function AccordianPage(){
    const items = [
        
        {   id: 'dsdss',
            label:"can i use react ",
            content: "you can you it on any proct you want",
        } ,
        {   id: 'feww',
            label:"can i use react ",
            content: "you can you it on any proct you want",
        },
        {   id: 'jkhjk',
            label:"can i use react ",
            content: "you can you it on any proct you want",
        } 
    ]
    return <Accordion items={items}/>

}

export default AccordianPage
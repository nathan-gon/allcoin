import DOMPurify from "dompurify"


const Playground = () => {
    const script = `<div>Playground</div>`


    return (
        <div
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(script)
            }}
        ></div>
    )
}

export default Playground
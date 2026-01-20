import textArea from "./textArea"; 
export default function TextArea(textfield,width, colour, height, onclick, type) {
    return (
        <textarea
            style={{
                width: width,
                height: height,
                backgroundColor: colour,
                border: 'none',
                borderRadius: '4px',
                color: colour,
                // cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                fontColor: '#090808ff'
            }}
            onClick={onclick}
            type={type}
        >
            {textfield}
        </textarea>
    );
    
}


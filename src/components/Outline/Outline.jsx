import './Outline.styles.css';

export default function Outline({bgColor, children}) {
    return (
        <div className="Outline" style={{backgroundColor: bgColor}}>
            {children}
        </div>
    )
}


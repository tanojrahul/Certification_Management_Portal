
function Textfield({ label, value, onChange, type = "text", placeholder = "" }) {
    const styles = {
        container: {    
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '20px',
        },
        label: {
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
        },
        input: {
            padding: '12px',
            fontSize: '16px',
            border: '2px solid #D1D5DB',
            borderRadius: '8px',
            outline: 'none',
            transition: 'border-color 0.2s ease',
        },
    };
    return (
        <div style={styles.container}>
            {/* <label style={styles.label}>{label}</label> */}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={styles.input}
            />
        </div>
    );
}
export default Textfield;
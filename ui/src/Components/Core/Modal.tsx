import React from 'react'

interface Props {
    show: boolean;
    close: Function;
    children: React.ReactNode;
}

const Modal = (props: Props) => {

    const closeModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        props.close(e)
    };

    return(
        <>
            {props.show && 
                (<div style={styles.container} onClick={closeModal}>
                    <div style={styles.inner_container}>
                        <button style={styles.close_button} onClick={closeModal}>
                            <div style={styles.left_close}></div>
                            <div style={styles.right_close}></div>
                        </button>
                        {props.children}
                    </div>
                </div>
                )
            }
      </>
    );
}

const styles = {
    container: {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#0000008a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "10s all linear"
    },
    inner_container: {
        background: "#fff",
        padding: 40,
        borderRadius: 5,
        position: "relative"
    },
    close_button:{
        height: 20,
        width: 20,
        borderRadius: "50%",
        border: "none",
        background: "#221e1e47",
        position: "absolute",
        top: 10,
        right: 10,
        cursor: "pointer"
    },
    left_close: {
        background: "#2b2b2e91",
        height: 12,
        width: 2,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)",
        borderRadius: 10,
    },
    right_close: {
        background: "#2b2b2e91",
        height: 12,
        width: 2,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) rotate(-45deg)",
        borderRadius: 10,
    },
} as const


export default Modal
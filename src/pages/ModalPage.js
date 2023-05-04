import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = (
    <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>
    )

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
        here is an important agreement for you to accept
    </p>
    </Modal>
    return (
        <div>
            <Button onClick={handleClick} primary>Open Model</Button>

            {showModal && modal}
            <p>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam eros eu ultricies suscipit. Fusce rhoncus pharetra sem, non euismod diam aliquet elementum. Vivamus semper vestibulum tellus vel elementum. 
            Fusce lorem risus, accumsan sed consectetur sit amet, sodales sit amet ex. Suspendisse quis commodo est. Nulla rutrum lacus et aliquam porttitor. Sed ac augue ac ligula congue feugiat. Vivamus quis purus accumsan, feugiat libero ac, gravida nisi. Integer venenatis neque sed purus tempor condimentum. Aenean laoreet nec nunc sit amet molestie. Nullam aliquet tellus in metus ultrices lobortis quis in leo. Vestibulum leo ex, porttitor vitae est vitae, pellentesque interdum quam. Vestibulum vel sem a sem varius aliquam porta at eros. 
            orem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam eros eu ultricies suscipit. Fusce rhoncus pharetra sem, non euismod diam aliquet elementum. Vivamus semper vestibulum tellus vel elementum. Fusce lorem risus, accumsan sed consectetur sit amet, sodales sit amet ex. Suspendisse quis commodo est. Nulla rutrum lacus et aliquam porttitor. Sed ac augue ac ligula congue feugiat. Vivamus quis purus accumsan, feugiat libero ac, gravida nisi. Integer venenatis neque sed purus tempor condimentum. Aenean laoreet nec nunc sit amet molestie. Nullam aliquet tellus in metus ultrices lobortis quis in leo. Vestibulum leo ex, porttitor vitae est vitae, pellentesque interdum quam. Vestibulum vel sem a sem varius aliquam porta at eros. 
            orem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam eros eu ultricies suscipit. Fusce rhoncus pharetra sem, non euismod diam aliquet elementum. Vivamus semper vestibulum tellus vel elementum. Fusce lorem risus, accumsan sed consectetur sit amet, sodales sit amet ex. Suspendisse quis commodo est. Nulla rutrum lacus et aliquam porttitor. Sed ac augue ac ligula congue feugiat. Vivamus quis purus accumsan, feugiat libero ac, gravida nisi. Integer venenatis neque sed purus tempor condimentum. Aenean laoreet nec nunc sit amet molestie. Nullam aliquet tellus in metus ultrices lobortis quis in leo. Vestibulum leo ex, porttitor vitae est vitae, pellentesque interdum quam. Vestibulum vel sem a sem varius aliquam porta at eros. 
            orem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam eros eu ultricies suscipit. Fusce rhoncus pharetra sem, non euismod diam aliquet elementum. Vivamus semper vestibulum tellus vel elementum. Fusce lorem risus, accumsan sed consectetur sit amet, sodales sit amet ex. Suspendisse quis commodo est. Nulla rutrum lacus et aliquam porttitor. Sed ac augue ac ligula congue feugiat. Vivamus quis purus accumsan, feugiat libero ac, gravida nisi. Integer venenatis neque sed purus tempor condimentum. Aenean laoreet nec nunc sit amet molestie. Nullam aliquet tellus in metus ultrices lobortis quis in leo. Vestibulum leo ex, porttitor vitae est vitae, pellentesque interdum quam. Vestibulum vel sem a sem varius aliquam porta at eros. 
            orem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam eros eu ultricies suscipit. Fusce rhoncus pharetra sem, non euismod diam aliquet elementum. Vivamus semper vestibulum tellus vel elementum. Fusce lorem risus, accumsan sed consectetur sit amet, sodales sit amet ex. Suspendisse quis commodo est. Nulla rutrum lacus et aliquam porttitor. Sed ac augue ac ligula congue feugiat. Vivamus quis purus accumsan, feugiat libero ac, gravida nisi. Integer venenatis neque sed purus tempor condimentum. Aenean laoreet nec nunc sit amet molestie. Nullam aliquet tellus in metus ultrices lobortis quis in leo. Vestibulum leo ex, porttitor vitae est vitae, pellentesque interdum quam. Vestibulum vel sem a sem varius aliquam porta at eros. 
            orem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam eros eu ultricies suscipit. Fusce rhoncus pharetra sem, non euismod diam aliquet elementum. Vivamus semper vestibulum tellus vel elementum. Fusce lorem risus, accumsan sed consectetur sit amet, sodales sit amet ex. Suspendisse quis commodo est. Nulla rutrum lacus et aliquam porttitor. Sed ac augue ac ligula congue feugiat. Vivamus quis purus accumsan, feugiat libero ac, gravida nisi. Integer venenatis neque sed purus tempor condimentum. Aenean laoreet nec nunc sit amet molestie. Nullam aliquet tellus in metus ultrices lobortis quis in leo. Vestibulum leo ex, porttitor vitae est vitae, pellentesque interdum quam. Vestibulum vel sem a sem varius aliquam porta at eros. 
            </p>
            
        </div>
    )
}

export default ModalPage
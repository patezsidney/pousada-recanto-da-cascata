import Modal from "@mui/material/Modal"
import ReactPlayer from "react-player"
import { FaTimes } from "react-icons/fa"
import { ModalContainer, ModalContent } from "../../styles/components/imageModalStyles"
import { styled } from '@mui/system';
import { Backdrop } from "@mui/material"

interface VideoModalProps {
  videoURL: string,
  isOpen: boolean,
  handleClose: () => void,
}

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.92)', // Ajuste a opacidade aqui
}));

export const VideoModal = ({videoURL, isOpen, handleClose}: VideoModalProps) => {

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{display: "flex", justifyContent: 'center', alignItems: 'center', border: "none"}}
      disableAutoFocus={true}
      closeAfterTransition
      BackdropComponent={StyledBackdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <ModalContainer>
        <FaTimes id="closeModal" onClick={handleClose} />
        <ModalContent>
          <ReactPlayer 
            url={videoURL} 
            onEnded={handleClose} 
            width='1056px' 
            height='594px'
            playing={true}
            controls={true}
          />
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

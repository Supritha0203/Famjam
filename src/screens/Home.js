import Sound from "react-sound";
import musicbeat from "./../Files/musicbeat.mp3";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Lottie from "react-lottie";
import animation from "./../Files/family.json";
import Navbar from "../components/Navbar";
import DisplayAlbum from "./DisplayAlbum";



const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Home = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
  props
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <div>
      <Sound
        url={musicbeat}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={100}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ alignItems: "center" }}>
          <Modal.Title>Hello Fam!!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ alignItems: "center" }}>
          <Lottie options={defaultOptions} height={200} width={300} />
          Want a look back at your memories??
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Let's dive in!
          </Button>
        </Modal.Footer>
      </Modal>
     <DisplayAlbum/>
    </div>
  );
};

export default Home;
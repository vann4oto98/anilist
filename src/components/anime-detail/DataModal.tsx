import React from "react";
import { IFullAnimeDetailQuery } from "../pages/__generated__/FullDetail.types";
import dynamic from "next/dynamic";
import { Modal, Box, Backdrop, Fade } from "@mui/material";
import Loader from "../Loader";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

type Props = {
  loading: boolean;
  openModal: boolean;
  setOpenModal: (val: boolean) => void;
  data: IFullAnimeDetailQuery | undefined;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "scroll",
  padding: "1rem",
};

const DataModal = ({ loading, data, openModal, setOpenModal }: Props) => {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <Box sx={style}>
          {loading && <Loader />}
          {data && <DynamicReactJson src={data.Media!} />}
        </Box>
      </Fade>
    </Modal>
  );
};

export default DataModal;

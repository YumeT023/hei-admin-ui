import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { forwardRef,useImperativeHandle, useState } from 'react';


const  BasicModal=(props, ref) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  //zavatra itako tany de otrn mlay
  //alefa ao ao amle deuxieme parametre ftsn le data tinareo
  //rehefa mampiasa any ito de asivo use Ref any aminy parent any de alefao en parametre anito zavatra ito, le ref, genre <HaModel ref={leref} /> truc du genre, efa misy example ao amle oe transcriptList io.
  //mandeha en parametre anio enableModal io le data ilaina rehetra, je pense oe azonareo antsaina ny fandehany, mbola tsy misy css fa io lo eee xD
  useImperativeHandle(ref,()=>({
    toogleModal:(data)=>{
      setOpen(!open)
      setData(data);
    },
  }))

  return (
    <div>
      <Button onClick={()=>{setOpen(!open)}}>Open modal</Button>
      <Modal
        open={open}
        onClose={()=>{setOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {props.children}
      </Modal>
    </div>
  );
}
export const HaModal = forwardRef(BasicModal);
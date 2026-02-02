import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is Physiotherapy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Sri Sai Priya Physiotherapy is a leading physiotherapy and rehabilitation centre committed to restoring movement and enhancing quality of life. We deliver evidence-based treatments supported by advanced technology and modern rehabilitation techniques. Our focus is on personalised care, accurate diagnosis, and effective therapy to help patients recover safely and regain confidence in movement..</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

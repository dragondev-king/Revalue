import React, { useState, useMemo, useCallback } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMore from '@material-ui/icons/ExpandMore';

export const HideAdvanceOptions = props => {
  const [isOpened, setIsOpened] = useState(false);
  const summaryLabel = useMemo(() => (isOpened ? 'Hide' : 'Show'), [isOpened]);

  const handleAccordionClick = useCallback(() => {
    props.setAdvanceOptionsStatus(
      props.stepName,
      !props.advanceOptionsStatus[props.stepName],
    );
  }, [props, props.advanceOptionsStatus, props.stepName]);

  return (
    <Accordion
      onClick={handleAccordionClick}
      expanded={props.advanceOptionsStatus[props.stepName]}
    >
      <div className={props.classes.showDetailContainer}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          onClick={() => setIsOpened(!isOpened)}
        >
          {`${summaryLabel} Advance Options`}
        </AccordionSummary>
        <div className={props.classes.divider}>
          <hr />
        </div>
      </div>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
};

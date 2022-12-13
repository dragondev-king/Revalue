import React, { useMemo, useCallback } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMore from '@material-ui/icons/ExpandMore';

import messages from '../messages';

export const HideAdvanceOptions = props => {
  const summaryLabel = useMemo(() => {
    const status = props.advanceOptionsStatus[props.stepName];
    const prefix = status ? 'hide' : 'show';
    return props.intl.formatMessage({
      ...messages[`${prefix}AdvanceOption`],
    });
  }, [props, props.intl]);

  const handleAccordionClick = useCallback(() => {
    props.setAdvanceOptionsStatus(
      props.stepName,
      !props.advanceOptionsStatus[props.stepName],
    );
  }, [props, props.advanceOptionsStatus, props.stepName]);

  return (
    <Accordion expanded={props.advanceOptionsStatus[props.stepName]}>
      <div className={props.classes.showDetailContainer}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          onClick={handleAccordionClick}
        >
          {summaryLabel}
        </AccordionSummary>
        <div className={props.classes.divider}>
          <hr />
        </div>
      </div>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
};

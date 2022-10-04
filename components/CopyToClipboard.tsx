import { useEffect, useRef, forwardRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from '@mui/material/Tooltip';
import styled from 'styled-components';

const OurEmail: string = "ouremail@gmail.com";

const CopyText = ({ children, textToCopy }: {children: any, textToCopy?: string}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        // Reset copied state after 2 seconds
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <>
      <CopyToClipboard
        text={textToCopy && textToCopy.length ? textToCopy : OurEmail}
        onCopy={() => setCopied(true)}
      >
        <Tooltip
          open={copied}
          disableHoverListener
          disableFocusListener
          arrow
          title={`Copied ${OurEmail} to your clipboard!`}
        >
          <div ref={tooltipRef}>
            {children}
          </div>
        </Tooltip>
      </CopyToClipboard>
    </>
  );
}

export default CopyText;

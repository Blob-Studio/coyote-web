import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from '@mui/material/Tooltip';

const OurEmail: string = "ouremail@gmail.com";

const CopyText = ({ children, textToCopy }:
  {
    children: any,
    textToCopy?: string
  }) => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    // if (copied) {
    //   setTimeout(() => {
    //     // Reset copied state after 2 seconds
    //     setCopied(false);
    //   }, 2000);
    // }
  }, [copied]);

  return (
    <CopyToClipboard
      text={textToCopy && textToCopy.length ? textToCopy : OurEmail}
      onCopy={() => setCopied(true)}
    >
      <Tooltip
        placement='top'
        open={copied}
        disableHoverListener
        disableFocusListener
        arrow
        title={`Copied ${OurEmail} to your clipboard!`}
      >
        {children}
      </Tooltip>
    </CopyToClipboard>
  );
}

export default CopyText;

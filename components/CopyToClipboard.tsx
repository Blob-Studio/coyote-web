import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from '@mui/material/Tooltip';
import { TooltipProps } from '@mui/material';

const OurEmail: string = 'ouremail@gmail.com';

const CopyText = ({ children, textToCopy, placement }: { children: any; textToCopy?: string, placement?: TooltipProps['placement'] }) => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        // Reset copied state after 2 seconds
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <CopyToClipboard text={textToCopy && textToCopy.length ? textToCopy : OurEmail} onCopy={() => setCopied(true)}>
      <Tooltip
        placement={placement || 'top'}
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
};

export default CopyText;

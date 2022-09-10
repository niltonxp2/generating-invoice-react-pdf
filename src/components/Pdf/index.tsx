import { Page, Document, PDFViewer, Font, Image } from '@react-pdf/renderer';
import { InvoiceInfo, Divider, ProjectInfo, Table } from './components';
import logo from '../../assets/images/header-logo.jpg';
import {
  OpenSansRegular,
  OpenSansBold,
  OpenSansSemiBold,
  MontserratRegular,
  MontserratMedium,
  MontserratBold,
} from '../../theme/fonts';

Font.register({
  family: 'Montserrat',
  fonts: [
    {
      fontWeight: 'normal',
      format: 'truetype',
      src: MontserratRegular,
    },
    {
      fontWeight: 'medium',
      format: 'truetype',
      src: MontserratMedium,
    },
    {
      fontWeight: 'bold',
      format: 'truetype',
      src: MontserratBold,
    },
  ],
});
Font.register({
  family: 'OpenSans',
  fonts: [
    {
      fontWeight: 'normal',
      format: 'truetype',
      src: OpenSansRegular,
    },
    {
      fontWeight: 'semibold',
      format: 'truetype',
      src: OpenSansSemiBold,
    },
    {
      fontWeight: 'bold',
      format: 'truetype',
      src: OpenSansBold,
    },
  ],
});

export const InvoicePDF = () => {
  return (
    <PDFViewer width='100%'>
      <Document>
        <Page size='A4'>
          <Image src={logo} />
          <InvoiceInfo />
          <Divider />
          <ProjectInfo />
          <Table />
        </Page>
      </Document>
    </PDFViewer>
  );
};

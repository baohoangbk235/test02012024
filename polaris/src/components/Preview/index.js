import { DataTable, Text, Card } from "@shopify/polaris";
import './index.css';

export const Preview = (props) => {
  return (
    <Card title="Preview" sectioned>
      <div className="preview-headers">
        <Text as='h2' variant='headingMd'>Prevew</Text>
        <div className="preview-buy-more">
          <Text as='h2' variant='headingLg' >Buy more and save</Text>
        </div>
        <Text as='h2' variant='headingSm' fontWeight="medium">Apply for all products in store</Text>
      </div>
      <DataTable
        columnContentTypes={[
          'text',
          'text',
          'numeric',
          'text',
        ]}
        headings={[
          'Title',
          'Discount Type',
          'Quantity',
          'Amount',
        ]}
        rows={props.items}
      />
    </Card>
  );
}
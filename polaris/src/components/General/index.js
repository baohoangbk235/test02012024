import { TextField, Card, Text } from "@shopify/polaris";
import { useCallback, useState } from "react";
import './index.css';

export const General = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleOnChangeTitle = useCallback((value) => setTitle(value), []);
    const handleOnChangeDesc = useCallback((value) => setDescription(value), []);

    return (
        <div className='general'>
            <Card sectioned>
                <Text as='h2' variant='headingMd'>General</Text>
                <TextField
                    label='Campaign'
                    value={props.campaignName}
                    onChange={props.handleCampaignNameChange}
                    error={props.campaignName ? false : "Campaign name is required"}
                    autoComplete="off"
                />
                <TextField label='Title' placeholder='Buy more and save' value={title} onChange={handleOnChangeTitle}/>
                <TextField label='Description' placeholder='Apply for all products in store' value={description} onChange={handleOnChangeDesc}/>
            </Card>
        </div>
    );
}
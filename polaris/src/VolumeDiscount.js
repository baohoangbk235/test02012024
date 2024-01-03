import { useCallback, useState } from 'react';
import { CustomOption } from './components/CustomOption';
import { Page, Layout, Card, Button, Text } from '@shopify/polaris';
import { Preview } from './components/Preview';
import './VolumeDiscount.css';
import { AddMajor } from '@shopify/polaris-icons';
import { General } from './components/General';

export const VolumeDiscount = () => {
    var items = [
        { index: 0, title: 'Single', subTitle: 'Standard price', quantity: 1, discountType: 'none', label: '' },
        { index: 1, title: 'Duo', subTitle: 'Save 10%', quantity: 2, discountType: 'percentage', label: '', amount: 10, suffix: '%' }
    ];

    const discountTypeOptions = [
        { label: 'None', value: 'none' },
        { label: '% discount', value: 'percentage' },
        { label: 'Discount / each', value: 'each' },
    ];

    const [optionItems, setOptionItems] = useState(items);
    const [campaignName, setCampaignName] = useState('');
    const [count, setCount] = useState(2);

    const handleDeleteOption = (index) => {
        setOptionItems((options) => [...options.filter((o) => o.index !== index)]);
    };

    const handleOnChangeAmount = (index, value) => {
        const newItems = optionItems.map((item) => {
            if (item.index === index) {
                const updatedItem = {
                    ...item,
                    amount: value
                }
                return updatedItem;
            }
            return item;
        });
        setOptionItems(newItems);
    }

    const handleOnChangeTitle = (index, value) => {
        const newItems = optionItems.map((item) => {
            if (item.index === index) {
                const updatedItem = {
                    ...item,
                    title: value
                }
                return updatedItem;
            }
            return item;
        });
        setOptionItems(newItems);
    }

    const handleOnChangeQuantity = (index, value) => {
        const newItems = optionItems.map((item) => {
            if (item.index === index) {
                const updatedItem = {
                    ...item,
                    quantity: value
                }
                return updatedItem;
            }
            return item;
        });
        setOptionItems(newItems);
    }

    const handleDiscountTypeChange = (index, value) => {
        const newItems = optionItems.map((item) => {
            if (item.index === index) {
                const updatedItem = {
                    ...item,
                    discountType: value,
                    suffix: value === 'none' ? '' : value === 'percentage' ? '%' : '$'
                }
                return updatedItem;
            }
            return item;
        });
        setOptionItems(newItems);
    };

    const handleOnChangeSubtitle = (index, value) => {
        const newItems = optionItems.map((item) => {
            if (item.index === index) {
                const updatedItem = {
                    ...item,
                    subTitle: value,
                }
                return updatedItem;
            }
            return item;
        });
        setOptionItems(newItems);
    };

    const handleOnChangeLabel = (index, value) => {
        const newItems = optionItems.map((item) => {
            if (item.index === index) {
                const updatedItem = {
                    ...item,
                    label: value,
                }
                return updatedItem;
            }
            return item;
        });
        setOptionItems(newItems);
    };

    const handleCampaignNameChange = useCallback((string) => setCampaignName(string), []);

    const handleAddItem = useCallback(() => {
        const lastItem = optionItems[optionItems.length - 1];
        const newItem = {
            index: count,
            discountType: 'none',
            quantity: lastItem ? lastItem.quantity + 1 : 1
        }
        const newItems = [...optionItems, newItem];
        setOptionItems(newItems);
        setCount(count => count + 1);
    });

    return (
        <Page title="Create volume discount" fullWidth>
            <Layout>
                <Layout.Section>
                    <General
                        campaignName={campaignName}
                        handleCampaignNameChange={handleCampaignNameChange}
                    />

                    <div className='rule-body'>
                        <Card>
                            <Text as='h2' variant='headingMd'>Volume discount rule</Text>
                        </Card>

                        {optionItems.map((option) =>
                            <CustomOption
                                {...option}
                                handleDeleteOption={handleDeleteOption}
                                handleDiscountTypeChange={handleDiscountTypeChange}
                                handleOnChangeAmount={handleOnChangeAmount}
                                discountTypeOptions={discountTypeOptions}
                                handleOnChangeQuantity={handleOnChangeQuantity}
                                handleOnChangeTitle={handleOnChangeTitle}
                                handleOnChangeSubtitle={handleOnChangeSubtitle}
                                handleOnChangeLabel={handleOnChangeLabel}
                            />
                        )}

                        <Card>
                            <Button fullWidth onClick={handleAddItem} icon={AddMajor}>
                                Add option
                            </Button>
                        </Card>
                    </div>
                </Layout.Section>

                <Layout.Section variant='oneThird'>
                    <Preview items={optionItems.map(option => {
                        var discountType = discountTypeOptions.filter(i => i.value === option.discountType)[0];
                        var suffix = discountType.value === 'none' ? '' : discountType.value === 'percentage' ? '%' : '$';
                        return [option.title, discountType.label, option.quantity, `${option.amount ?? ''} ${suffix}`]
                    })} />
                </Layout.Section>
            </Layout>
        </Page>
    );
}
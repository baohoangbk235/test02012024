import { Icon, Select, TextField, InlineGrid, Card } from '@shopify/polaris';
import { DeleteMajor } from '@shopify/polaris-icons';
import './index.css';

export const CustomOption = (props) => {
    const index = props.index;

    return (
        <Card>
            <div className='custom-option'>
                <div className='custom-option-header'>
                    <div className='custom-option-name'>Option {index + 1}</div>
                    <div className="custom-option-delete-icon" onClick={() => props.handleDeleteOption(index)}>
                        <Icon className='my-icon' source={DeleteMajor}></Icon>
                    </div>
                </div>
                <div className='custom-option-body'>
                    <InlineGrid gap="400" columns={3}>
                        <TextField
                            label='Title' type='text'
                            value={props.title}
                            onChange={value => props.handleOnChangeTitle(index, value)}
                            error={props.title ? false : "Title can not be empty"} />
                        <TextField
                            label='Subtitle'
                            type='text'
                            value={props.subTitle}
                            onChange={value => props.handleOnChangeSubtitle(index, value)} />
                        <TextField
                            label='Label (optional)'
                            type='text'
                            value={props.label}
                            onChange={value => props.handleOnChangeLabel(index, value)} />
                    </InlineGrid>

                    <InlineGrid gap="400" columns={3}>
                        <TextField
                            label='Quantity'
                            type='number'
                            value={props.quantity}
                            onChange={value => props.handleOnChangeQuantity(index, value)}
                            error={props.quantity ? false : "Quantity can not be empty"}
                        />
                        <Select
                            label='Discount type'
                            type='number'
                            options={props.discountTypeOptions}
                            onChange={value => props.handleDiscountTypeChange(index, value)}
                            value={props.discountType}
                        />
                        {props.discountType !== 'none' &&
                            <TextField
                                label='Amount'
                                suffix={props.suffix}
                                value={props.amount}
                                onChange={(value) => props.handleOnChangeAmount(index, value)}
                                error={props.amount ? false : "Quantity can not be empty"}
                            />
                        }
                    </InlineGrid>
                </div>
            </div>
        </Card>
    );
}
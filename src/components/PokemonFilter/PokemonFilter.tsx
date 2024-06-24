import { Button, Col, Form, Input, InputNumber, Row, Select, Typography } from "antd";
import { GetPokemonFilter } from "interfaces/pokemon";
import { PokemonFilterProps } from "./PokemonFilterProps";
import { usePokemonFilter } from "./usePokemonFilter";
const { Title, } = Typography;

export const PokemonFilter = ({ onSearch, title }: PokemonFilterProps) => {
    const { types } = usePokemonFilter()
    return (
        <div>
            {
                title && <Title level={5}>Pokemons</Title>
            }

            <Form
                initialValues={{} as GetPokemonFilter}
                style={{ padding: '20px' }}
                onFinish={onSearch}
            >
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            label="Id"
                            name="id"
                            rules={[
                                {
                                    pattern: /^[0-9]*$/,
                                    message: 'Only integers',
                                },
                            ]}
                        >
                            <InputNumber
                                style={{ width: '100%' }}
                                min={0}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            label="Name"
                            name="name"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            label="Type"
                            name="type"
                        >
                            <Select
                                allowClear
                                showSearch
                                options={types.map(type => ({
                                    label: type.name,
                                    value: type.id,
                                  }))}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify="end" gutter={16}>
                    <Col>
                        <Form.Item>
                            <Button size="large" htmlType="reset">
                                Clear
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large">
                                Search
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

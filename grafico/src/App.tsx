import React from "react";
import {
    Text,
    Image,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Center,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button as ChakraButton,
} from '@chakra-ui/react'

import {ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category, DataLabel, Tooltip} from '@syncfusion/ej2-react-charts'

const salesData = [ 
    {month: 'Jan', sales: 0.01 }, 
    {month: 'Jan', sales: 0.07 },
    {month: 'Jan', sales: 0.10 },
    {month: 'Fev', sales: 0.20 }, 
    {month: 'Mar', sales: 0.50 },
    {month: 'Abr', sales: 1},
    {month: 'Dez', sales: 5 },
    
]

import './App.css';

function App() {
  return (
    <Accordion className="TabelaProdutos" mt="24px" border="1px solid #e2e2e2" borderRadius="15px" allowToggle>
            <AccordionItem border="none">
                <AccordionButton _focus={{ outline: '0' }} p="20px" >
                    <Center flex='1' justifyContent="start">
                        <Image src={historico.src} mr="11px" h="12px" />
                        <Text
                            fontFamily='Roboto'
                            fontWeight='700'
                            fontSize='18px'
                            lineHeight='21px'
                            color="#454545"
                        >
                            HISTÓRICO DE PREÇO
                        </Text>
                    </Center>
                    <Image src={arrowndown.src} h="7px"/>
                </AccordionButton>
                <AccordionPanel >
                    <Menu >
                        <MenuButton as={ChakraButton} mt="10px" bg="#FFFFFF" border="1px solid #e2e2e2" _focus={{ outline: '0' }} >
                        <Center flexDir="row">
                        <Text
                        fontFamily='Roboto'
                        fontWeight='400'
                        fontSize='14px'
                        lineHeight='16px'
                        color="#717171"
                        >
                        Todo o tempo
                            </Text>
                            <Image src={arrowndown.src} h="7px" w="12px" ml="52px"/>
                        </Center>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Janeiro</MenuItem>
                            <MenuItem>fevereiro</MenuItem>
                            <MenuItem>março</MenuItem>
                        </MenuList>
                    </Menu>
                    <Box mt="24px" border="1px solid #e2e2e2" borderRadius="15px" p="15px" >
                        <ChartComponent primaryXAxis={{valueType:"Category", title:'Periodo'}} primaryYAxis={{title:'Lances'}} legendSettings={{visible:true}} tooltip={{enable:true}} >
                            <Inject services={[LineSeries, Category, DataLabel, Tooltip]} ></Inject>
                            <SeriesCollectionDirective>
                                <SeriesDirective type="Line" dataSource={salesData} xName="month" yName="sales" marker={{dataLabel:{visible:true}, visible:true}}  ></SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                    </Box>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
  );
}

export default App;

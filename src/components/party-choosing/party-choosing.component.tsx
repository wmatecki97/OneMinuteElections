
import React from 'react';
import FlashingContainer from '../flashing/flashing.component'
import { useContext, useEffect, useState } from 'react';
interface Party {
    logo: string,
    name: string,
    visited: boolean,
    description: string
}

const PartyChoosing = () => {
    const parties = [{
        logo: 'https://www.socialistsanddemocrats.eu/themes/sd/images/png/logo_70.png',
        name: 'Socialists & Democrats',
        visited: false,
        description: 'The S&D Group stands for an inclusive European society based on principles of freedom, equality, solidarity, diversity and fairness. Our MEPs are committed to fighting for social justice, jobs and growth, consumer rights, sustainable development, financial market reform and human rights to create a stronger and more democratic Europe and a better future for everyone. In today\'s times of crisis, the S&D Grou\'s priority is to fight unemployment and ensure that our societies and markets become fairer. We want to give people back trust in the EU and hope for their future. These principles inspire our daily work, in the European Parliament and beyond.'
    },
    {
        logo: 'data:image/png;base64,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',
        name: 'European People Party',
        visited: false,
        description: 'Mission To work to the benefit of all Europeans to build a more ambitious and a more self-assured Europe where everyone has an equal opportunity to succeed; defending a united Europe that respects subsidiarity, without contradiction among European, national and local identities. To put people at the heart of the European project, strengthening European democracy and the accountability of its institutions; defending the European way of life, advocating a united Europe based on the values of human dignity, freedom, solidarity, the respect of human rights and the rule of law.'
    },
    {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Logo_of_Renew_Europe.svg/1200px-Logo_of_Renew_Europe.svg.png',
        name: 'Renew Europe',
        visited: false,
        description: 'We are the pro-European and centrist political group in the European Parliament. We will invest in a sustainable continent. We do not have a Planet B, so we must make sure that we preserve the one we have. The Paris climate agreement of 2015 set out the roadmap, now it is time to deliver on the promises made and even go beyond them. We see this challenge as a fantastic opportunity, especially to create quality jobs for young people. We thrive for a more prosperous Europe for the benefit of all Europeans. By investing in the talents of our citizens and unlocking the potential of Europe’s internal market. We strongly believe that economic growth, environmental sustainability, fair competition and responsibility go hand in hand.'
    },
    {
        logo: '',
        name: '',
        visited: false,
        description: ''
    },
    {
        logo: '',
        name: '',
        visited: false,
        description: ''
    },
    {
        logo: '',
        name: '',
        visited: false,
        description: ''
    },
    ] as Party[];

    const [selectedParty, setSelectedParty] = useState<Party>();

    const partyVisited = () => {
        if(selectedParty){

         selectedParty.visited = true;
    }
    setSelectedParty(undefined)
    }
    return <>
            {!selectedParty && parties.map(p => <div onClick={() => setSelectedParty(p)}>
                <img src={p.logo} className='party-logo'></img>
                <p>
                    {p.name}
                </p>
            </div>)}
            {selectedParty && 
            
        <FlashingContainer text={selectedParty.description} finished={partyVisited} />
    }
    </>
        ;

};

export default PartyChoosing;
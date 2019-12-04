import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";


class Ordlista extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="table-word">
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Miljöförändringar
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Klimatet har alltid förändrats, men på grund av människans livsstil
            ökar den globala temperaturen snabbare än tidigare. Detta då
            människan bland annat kör bil, flyger och äter mat som är dålig för
            klimatet, som kött och varor som transporterats långt.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          CO2-utsläpp och fossila bränslen
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Fossila bränslen är exempelvis bensin, diesel, olja, naturgas och
            kol. När fossila bränslen används till bland annat fordon eller
            industrin bildas CO2 (koldioxid). Detta är dåligt för jordens
            atmosfär, då växthuseffekten ökar.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Globala temperaturer
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Den globala genomsnittstemperaturen, det vill säga
            medeltemperaturen, har stigit. Det finns allvarliga konsekvenser av
            den globala uppvärmningen, då bland annat glaciärer smälter och
            havsnivån ökar.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Glaciärer
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            En glaciär är en stor massa av is och snö, och innehåller jordens
            största resurs av sötvatten. Cirka tio procent av jordens yta är
            täckt av glaciärer, och dessa finns i alla världsdelar bortsett från
            Australien. Hela 97% av glaciärerna finns på Antarktis och Grönland.
            På grund av ökad global temperatur börjar glaciärerna att smälta.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Havsnivåer
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            Den globala havsnivån stiger, vilket beror på att temperaturen i
            luften stiger, som en konsekvens av att glaciärerna smälter. Även om
            växthusgasutsläppen skulle minska drastiskt, kommer havsnivån att
            fortsätta stiga. Detta då halten koldioxid i atmosfären redan är så
            hög.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Gasbränslen
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            Gasbränslen är ett samlingsnamn för bränslen som vid användningen är
            i gasform. Till dessa hör till exempel biogas, naturgas, gasol och
            vätgas.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Flytande bränslen
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>
            De flesta flytande bränslen i ingår i kategorin fossila bränslen.
            Exempel på flytande bränslen är, bensin, etanol och biodiesel.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 7}
          index={7}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Fasta bränslen
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <p>
            Fast bränsle är olika former av fast material som kan brännas för
            att frigöra energi, vilket ger värme och ljus genom
            förbränningsprocessen. Vanliga exempel på fasta bränslen är trä, kol
            och träpellets.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 8}
          index={8}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Cement
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 8}>
          <p>
            Cementindustrin är en av de två största producenterna av koldioxid
            (CO 2 ) och skapar upp till 8% av de globala konstgjorda utsläppen
            av denna gas, varav 50% kommer från den kemiska processen och 40%
            från brinnande bränsle.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 9}
          index={9}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Gasfackling
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 9}>
          <p>
            Gasfackling är en industriprocess som innebär att bränna
            överskottsgas på oljefält, i raffinaderier eller vid fabriker.
            Bränningen sker oftast enbart för att elda upp gasen. Värmeenergin
            tas inte tillvara.
          </p>
        </Accordion.Content>
      </Accordion>
      </div>
    );
  }
}

export default Ordlista;

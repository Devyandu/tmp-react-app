import TopContentCarousel from '../app/components/TopContentCarousel/TopContentCarousel'

const topContentArray=[{
  img:'assets/mountfuji.jpeg',
  title:'Some title',
  body:'Some Body'

},
{
  img:'assets/matterhorn.jpeg',
  title:'Some other title',
  body:'Some other Body'

}];

export default {
    title: 'Components/TopContentCarousel',
    component: TopContentCarousel
  };
  export const Primary = {

     
    render: () => <TopContentCarousel topContentArray={topContentArray}/>
  };
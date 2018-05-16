import React, { Component } from 'react'
import Link from 'gatsby-link'

import MktplaceShowcaseTitle from './MktplaceShowcaseTitle'
import MktplaceShowcaseBody from './MktplaceShowcaseBody'

export default class MarketplaceShowcase extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron pl-0 pr-0">
          <p className="h2 mb-4">Marketplace</p>
          {/* Nav items */}
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <MktplaceShowcaseTitle status="active" name="gpu" title="GPUs" />
              <MktplaceShowcaseTitle name="rig" title="Rigs" />
              <MktplaceShowcaseTitle
                name="powersupplies"
                title="Power Supplies"
              />
              <MktplaceShowcaseTitle name="other" title="Other" />
              <MktplaceShowcaseTitle name="starred" title="Starred" />
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <MktplaceShowcaseBody
              status="active"
              name="gpu"
              body="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae quis quia officiis error ipsam itaque commodi nemo
                accusantium, dolor dolores consequuntur assumenda tempora
                voluptatibus reiciendis! Reprehenderit expedita dignissimos, eos
                voluptate excepturi beatae rem facere libero nam ad, placeat
                totam fugiat?"
            />
            <MktplaceShowcaseBody
              name="rig"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quis est assumenda quia pariatur voluptatem quisquam fugiat,
                iure ea rem animi debitis quaerat reprehenderit repellat, sequi
                dignissimos ut beatae atque adipisci ab blanditiis. Facere ipsam
                necessitatibus aliquid assumenda nostrum nemo."
            />
            <MktplaceShowcaseBody
              name="powersupplies"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo obcaecati in, debitis eligendi ad sunt eveniet necessitatibus quae dolorum inventore voluptatem a est. Quibusdam vitae impedit natus minima, nihil autem voluptatem quidem ad iure reprehenderit fuga maiores doloribus enim!"
            />
            <MktplaceShowcaseBody
              name="other"
              body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt illo eum fuga suscipit, incidunt mollitia iure, sapiente odio aliquam placeat! Pariatur eveniet ipsum cumque reprehenderit error est cupiditate dolorum. Neque esse ab, consectetur aut temporibus magni est hic corrupti!"
            />
            <MktplaceShowcaseBody
              name="starred"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam maiores perferendis sequi ducimus dolorem cum deserunt magni fugit asperiores aliquam dolor tenetur porro blanditiis, quas corrupti, assumenda ratione quod iusto rerum. Saepe cum unde sint explicabo architecto voluptates dicta."
            />
          </div>
        </div>
      </div>
    )
  }
}

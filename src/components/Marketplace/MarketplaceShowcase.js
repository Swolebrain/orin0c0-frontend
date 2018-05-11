import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class MarketplaceShowcase extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron mt-5">
            <p className="h2 mb-4">Marketplace</p>
            {/* Nav items */}
            <nav>
              <div
                className="nav nav-tabs nav-fill"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className="nav-item nav-link active"
                  id="nav-gpu-tab"
                  data-toggle="tab"
                  href="#nav-gpu"
                  role="tab"
                  aria-controls="nav-gpu"
                  aria-selected="true"
                >
                  GPU
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-rig-tab"
                  data-toggle="tab"
                  href="#nav-rig"
                  role="tab"
                  aria-controls="nav-rig"
                  aria-selected="false"
                >
                  Rigs
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-powersupplies-tab"
                  data-toggle="tab"
                  href="#nav-powersupplies"
                  role="tab"
                  aria-controls="nav-powersupplies"
                  aria-selected="false"
                >
                  Power Supplies
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-other-tab"
                  data-toggle="tab"
                  href="#nav-other"
                  role="tab"
                  aria-controls="nav-other"
                  aria-selected="false"
                >
                  Other
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-starred-tab"
                  data-toggle="tab"
                  href="#nav-starred"
                  role="tab"
                  aria-controls="nav-starred"
                  aria-selected="false"
                >
                  Starred
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-gpu"
                role="tabpanel"
                aria-labelledby="nav-gpu-tab"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                doloremque quia nulla provident ducimus sit sequi aut ipsa fugit
                porro expedita quisquam rerum architecto, laborum, voluptatem,
                ipsam eum cumque veniam. Quos cum itaque nulla officia ut
                laudantium hic repellat ducimus!
                <Link
                  to="#"
                  className="btn btn-sm btn-block btn-secondary mt-2"
                >
                  more
                </Link>
              </div>
              <div
                className="tab-pane fade"
                id="nav-rig"
                role="tabpanel"
                aria-labelledby="nav-rig-tab"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quis est assumenda quia pariatur voluptatem quisquam fugiat,
                iure ea rem animi debitis quaerat reprehenderit repellat, sequi
                dignissimos ut beatae atque adipisci ab blanditiis. Facere ipsam
                necessitatibus aliquid assumenda nostrum nemo.
                <Link
                  to="#"
                  className="btn btn-sm btn-block btn-secondary mt-2"
                >
                  more
                </Link>
              </div>
              <div
                className="tab-pane fade"
                id="nav-powersupplies"
                role="tabpanel"
                aria-labelledby="nav-powersupplies-tab"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                ipsam, fugit obcaecati pariatur hic animi magnam sapiente, odit
                laboriosam nam nesciunt nostrum at corrupti aspernatur! Nobis
                enim explicabo accusantium aliquam. Quaerat culpa est quam
                itaque! Vero iusto excepturi cum molestias?
                <Link
                  to="#"
                  className="btn btn-sm btn-block btn-secondary mt-2"
                >
                  more
                </Link>
              </div>
              <div
                className="tab-pane fade"
                id="nav-other"
                role="tabpanel"
                aria-labelledby="nav-other-tab"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                ipsam, fugit obcaecati pariatur hic animi magnam sapiente, odit
                laboriosam nam nesciunt nostrum at corrupti aspernatur! Nobis
                enim explicabo accusantium aliquam. Quaerat culpa est quam
                itaque! Vero iusto excepturi cum molestias?
                <Link
                  to="#"
                  className="btn btn-sm btn-block btn-secondary mt-2"
                >
                  more
                </Link>
              </div>
              <div
                className="tab-pane fade"
                id="nav-starred"
                role="tabpanel"
                aria-labelledby="nav-starred-tab"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                ipsam, fugit obcaecati pariatur hic animi magnam sapiente, odit
                laboriosam nam nesciunt nostrum at corrupti aspernatur! Nobis
                enim explicabo accusantium aliquam. Quaerat culpa est quam
                itaque! Vero iusto excepturi cum molestias?
                <Link
                  to="#"
                  className="btn btn-sm btn-block btn-secondary mt-2"
                >
                  more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

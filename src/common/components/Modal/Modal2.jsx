import React from 'react'

export default function Modal2({ Component, ...restParam }) { //{Component,...restParam} :props

  //Định nghĩa nhiều thuộc tính phương thức 
  return (
    <div>
      <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title"><strong>{restParam.title}</strong></h3>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
            </div>
            <div className="modal-body">
              <Component {...restParam} />
            </div>

          </div>
        </div>
      </div>
 

    </div>
  )

}
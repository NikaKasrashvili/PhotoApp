using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BlogLabTasks;
using BlogLabTasks.Models;

namespace ProjectLab.Web.Controllers
{
    [Route("api/photos")]
    [ApiController]
    public class PhotoController : ControllerBase
    {
        #region Constuctor
        private readonly IPhotoRepository _photoRepository;

        public PhotoController(IPhotoRepository photoRepository)
        {
            this._photoRepository = photoRepository;
        }
        #endregion

        #region Actions

        [HttpGet("getAllPhotos")]
        public async Task<IActionResult> GetAllPhotos()
        {
            var result = await _photoRepository.GetAllPhotos();
            return Ok(result);
        }

        [HttpDelete("deletePhoto/{PhotoId:int}")]
        public async Task<IActionResult> Delete(int PhotoId)
        {
            await _photoRepository.DeletePhoto(PhotoId);
            return Ok();
        }

        [HttpPost("insert")]
        public async Task<IActionResult> Create(Photo photo)
        {
            await _photoRepository.InsertAsync(photo);
            return Ok();
        }

        [HttpPut("update")]
        public async Task<IActionResult> Update(Photo photo)
        {
            await _photoRepository.UpdatePhoto(photo);
            return Ok();
        }


        #endregion

        [HttpGet("getPhotoById/{PhotoId}")]
        public async Task<IActionResult> GetPhotoById(int PhotoId)
        {
            var result = await _photoRepository.GetPhotoById(PhotoId);
            return Ok(result);
        }

    }
}



    

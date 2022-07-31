using BlogLabTasks.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogLabTasks
{
    public interface IPhotoRepository
    {
        Task<IEnumerable<Photo>> GetAllPhotos();
        
        Task DeletePhoto(int PhotoId);

        Task UpdatePhoto(Photo photo);

        Task InsertAsync (Photo photo);

        Task <Photo> GetPhotoById (int PhotoId); 
    
    }
}

using BlogLabTasks.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;



namespace BlogLabTasks
{
    public class PhotoRepository : IPhotoRepository
    {
        #region Conection
        private readonly string ConnectionString;
        public PhotoRepository(IConfiguration configuration)
        {
            ConnectionString = configuration.GetConnectionString("Default");

        }

        #endregion

        public async Task<IEnumerable<Photo>> GetAllPhotos()
        {
            IEnumerable<Photo> result;

            using (var connection = new SqlConnection(ConnectionString))
            {
                result = await connection.QueryAsync<Photo>(
                    "dbo.GetAllPhotos",
                    new { },
                    commandType: CommandType.StoredProcedure
                    );
            }
            return result;
        }

        public async Task DeletePhoto(int PhotoId)
        {
            using var connection = new SqlConnection(ConnectionString);
            await connection.ExecuteScalarAsync(
                "dbo.DeletePhoto",
                new {PhotoId = PhotoId},
                commandType: CommandType.StoredProcedure
            );
        }

        public async Task InsertAsync(Photo photo)
        {
            var par = new DynamicParameters();
            par.Add("Title", photo.Title);
            par.Add("Author", photo.Author);
            par.Add("Descriptions", photo.Descriptions);
            par.Add("ImageUrl", photo.ImageUrl);

            using (var connection = new SqlConnection(ConnectionString))
            {
                await connection.ExecuteAsync(
                    "InsertPhoto",
                    par,
                    commandType: CommandType.StoredProcedure).ConfigureAwait(false);
            }
        }

        public async Task UpdatePhoto(Photo photo)
        {
            var par = new DynamicParameters();
            par.Add("Title", photo.Title);
            par.Add("Author", photo.Author);
            par.Add("Descriptions", photo.Descriptions);
            par.Add("ImageUrl", photo.ImageUrl);
            

            using (var connection = new SqlConnection(ConnectionString))
            {
                await connection.ExecuteAsync(
                    "UpdatePhoto",
                    par,
                    commandType: CommandType.StoredProcedure).ConfigureAwait(false);
            }
        }

        public async Task<Photo> GetPhotoById(int PhotoId)
        {
            Photo result;

            using (var connection = new SqlConnection(ConnectionString))
            {
                result = await connection.QuerySingleOrDefaultAsync<Photo>(
                    "dbo.GetPhotoById",
                    new {PhotoId = PhotoId },
                    commandType: CommandType.StoredProcedure
                    );
            }
            return result;
        }
    }
}


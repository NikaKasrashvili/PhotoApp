namespace BlogLabTasks.Models
{
    public class Photo
    {
        public int PhotoId { get; set; }

		public string? Title { get; set; }

        public   string? Author { get; set; }

		public string? Descriptions { get; set; }

        public string? ImageUrl { get; set; }

        public DateTime PublishDate { get; set; }

        public DateTime  UpdateDate { get; set; }

    }
}



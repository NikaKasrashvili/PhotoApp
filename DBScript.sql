CREATE DATABASE PhotoBlog

GO

------------------

USE [PhotoBlog]
GO

/****** Object:  Table [dbo].[Photo]    Script Date: 7/31/2022 6:55:47 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Photo](
	[PhotoId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](30) NOT NULL,
	[Author] [varchar](30) NULL,
	[Descriptions] [varchar](300) NOT NULL,
	[ImageUrl] [varchar](max) NOT NULL,
	[PublishDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK__Photo__21B7B5E27F96B6FE] PRIMARY KEY CLUSTERED 
(
	[PhotoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Photo] ADD  CONSTRAINT [DF__Photo__PublishDa__24927208]  DEFAULT (getdate()) FOR [PublishDate]
GO

ALTER TABLE [dbo].[Photo] ADD  CONSTRAINT [DF__Photo__UpdateDat__25869641]  DEFAULT (getdate()) FOR [UpdateDate]
GO


------------------

USE [PhotoBlog]
GO

/****** Object:  StoredProcedure [dbo].[GetAllPhotos]    Script Date: 7/31/2022 6:56:21 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[GetAllPhotos]
AS
	SELECT	[PhotoId],
			[Title],
			[Author],
			[Descriptions],
			[ImageUrl],
			[PublishDate],
			[UpdateDate]
	FROM [dbo].[Photo]
	Go;
		
	
GO


------------------
USE [PhotoBlog]
GO

/****** Object:  StoredProcedure [dbo].[DeletePhoto]    Script Date: 7/31/2022 7:06:50 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeletePhoto]
	@PhotoId INT
AS

	DELETE FROM [dbo].[Photo]
	WHERE [PhotoId] = @PhotoId
GO

------------------

USE [PhotoBlog]
GO

/****** Object:  StoredProcedure [dbo].[GetPhotoById]    Script Date: 7/31/2022 6:59:56 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[GetPhotoById]
	@PhotoId int
AS
	SELECT	[PhotoId],
			[Title],
			[Author],
			[Descriptions],
			[ImageUrl],
			[PublishDate],
			[UpdateDate]
	
	FROM [dbo].[Photo]
	WHere PhotoId = @PhotoId

		
	
GO

------------------

USE [PhotoBlog]
GO

/****** Object:  StoredProcedure [dbo].[InsertPhoto]    Script Date: 7/31/2022 6:59:26 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertPhoto]
	@Title VARCHAR (30),
	@Author Varchar (30), 
	@Descriptions VARCHAR (250),
	@ImageUrl VARCHAR (MAX)
		
AS
BEGIN
	INSERT INTO [dbo].[Photo]
           ([Title],
		   [Author],
		   [Descriptions],
           [ImageUrl]
		   )
		 
	Values(	
		@Title,
		@Author,
		@Descriptions,
		@ImageUrl
		)		
END
GO

------------------

USE [PhotoBlog]
GO

/****** Object:  StoredProcedure [dbo].[UpdatePhoto]    Script Date: 7/31/2022 7:00:31 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdatePhoto] 
	@PhotoId INT,
	@Title Varchar (30),
	@Author Varchar (30),
	@Descriptions Varchar (300),
	@ImageUrl Varchar (MAX)
	
AS
Begin 
	UPDATE [dbo].[Photo]
		SET [Title] = @Title
		 ,[Author] = @Author
		  ,[Descriptions] = @Descriptions
		  ,[ImageUrl] = @ImageUrl		 

	 WHERE PhotoId = @PhotoId
END
GO

-------
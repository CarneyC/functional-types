
<a name="globalsmd"></a>

[functional-types](#globalsmd)

# functional-types

## Index

### Modules

* ["DateTime"](#modules_datetime_md)
* ["FileType"](#modules_filetype_md)
* ["Folder/Arbitraries"](#modules_folder_arbitraries_md)
* ["Folder/index"](#modules_folder_index_md)
* ["Label"](#modules_label_md)
* ["Schema/Arbitraries"](#modules_schema_arbitraries_md)
* ["Schema/index"](#modules_schema_index_md)
* ["String"](#modules_string_md)
* ["TableAnnotation"](#modules_tableannotation_md)
* ["Vertex/Arbitraries"](#modules_vertex_arbitraries_md)
* ["Vertex/index"](#modules_vertex_index_md)
* ["index"](#modules_index_md)


<a name="readmemd"></a>

[functional-types](#globalsmd)

# functional-types


# Interfaces


<a name="interfaces_folder_index_attributesmd"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md) › [Attributes](#interfaces_folder_index_attributesmd)

## Interface: Attributes

### Hierarchy

* **Attributes**

### Index

#### Properties

* [folder](#folder)
* [id](#id)
* [name](#name)
* [type](#type)

### Properties

####  folder

• **folder**: *string*

Defined in src/Folder/index.ts:29

___

####  id

• **id**: *string*

Defined in src/Folder/index.ts:28

___

####  name

• **name**: *string*

Defined in src/Folder/index.ts:30

___

####  type

• **type**: *FT.FileType*

Defined in src/Folder/index.ts:31


<a name="interfaces_folder_index_foldermd"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md) › [Folder](#interfaces_folder_index_foldermd)

## Interface: Folder

### Hierarchy

* **Folder**

### Index

#### Properties

* [created_at](#created_at)
* [id](#id)
* [name](#name)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *string*

Defined in src/Folder/index.ts:23

___

####  id

• **id**: *string*

Defined in src/Folder/index.ts:21

___

####  name

• **name**: *string*

Defined in src/Folder/index.ts:22

___

####  updated_at

• **updated_at**: *string*

Defined in src/Folder/index.ts:24


<a name="interfaces_folder_index_metadatamd"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md) › [Metadata](#interfaces_folder_index_metadatamd)

## Interface: Metadata

### Hierarchy

* **Metadata**

### Index

#### Properties

* [bucket](#bucket)
* [content_type](#content_type)
* [created_at](#created_at)
* [generation](#generation)
* [id](#id)
* [kind](#kind)
* [media_link](#media_link)
* [name](#name)
* [self_link](#self_link)
* [size](#size)
* [updated_at](#updated_at)

### Properties

####  bucket

• **bucket**: *string*

Defined in src/Folder/index.ts:40

___

####  content_type

• **content_type**: *string*

Defined in src/Folder/index.ts:42

___

####  created_at

• **created_at**: *string*

Defined in src/Folder/index.ts:44

___

####  generation

• **generation**: *string*

Defined in src/Folder/index.ts:41

___

####  id

• **id**: *string*

Defined in src/Folder/index.ts:36

___

####  kind

• **kind**: *string*

Defined in src/Folder/index.ts:35

___

####  media_link

• **media_link**: *string*

Defined in src/Folder/index.ts:38

___

####  name

• **name**: *string*

Defined in src/Folder/index.ts:39

___

####  self_link

• **self_link**: *string*

Defined in src/Folder/index.ts:37

___

####  size

• **size**: *string*

Defined in src/Folder/index.ts:43

___

####  updated_at

• **updated_at**: *string*

Defined in src/Folder/index.ts:45


<a name="interfaces_label_labelmd"></a>

[functional-types](#globalsmd) › ["Label"](#modules_label_md) › [Label](#interfaces_label_labelmd)

## Interface: Label

### Hierarchy

* **Label**

### Index

#### Properties

* [color](#color)
* [id](#id)
* [name](#name)

### Properties

####  color

• **color**: *string*

Defined in src/Label.ts:6

___

####  id

• **id**: *string*

Defined in src/Label.ts:4

___

####  name

• **name**: *string*

Defined in src/Label.ts:5


<a name="interfaces_schema_index_filematchermd"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md) › [FileMatcher](#interfaces_schema_index_filematchermd)

## Interface: FileMatcher

### Hierarchy

* [Matcher](#interfaces_schema_index_matchermd)

  ↳ **FileMatcher**

### Index

#### Properties

* [child](#optional-child)
* [name](#name)
* [regex](#regex)
* [timestamp_capture_group](#timestamp_capture_group)
* [type](#type)

### Properties

#### `Optional` child

• **child**? : *[FileMatcher](#interfaces_schema_index_filematchermd)*

Defined in src/Schema/index.ts:30

___

####  name

• **name**: *string*

*Inherited from [Matcher](#interfaces_schema_index_matchermd).[name](#name)*

Defined in src/Schema/index.ts:25

___

####  regex

• **regex**: *string*

*Inherited from [Matcher](#interfaces_schema_index_matchermd).[regex](#regex)*

Defined in src/Schema/index.ts:24

___

####  timestamp_capture_group

• **timestamp_capture_group**: *number*

*Inherited from [Matcher](#interfaces_schema_index_matchermd).[timestamp_capture_group](#timestamp_capture_group)*

Defined in src/Schema/index.ts:26

___

####  type

• **type**: *[Type](#type)*

Defined in src/Schema/index.ts:31


<a name="interfaces_schema_index_gettablemd"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md) › [Gettable](#interfaces_schema_index_gettablemd)

## Interface: Gettable

### Hierarchy

* **Gettable**

### Index

#### Properties

* [attributes](#attributes)
* [file](#file)

### Properties

####  attributes

• **attributes**: *[Matcher](#interfaces_schema_index_matchermd)[]*

Defined in src/Schema/index.ts:36

___

####  file

• **file**: *[FileMatcher](#interfaces_schema_index_filematchermd)*

Defined in src/Schema/index.ts:35


<a name="interfaces_schema_index_matchermd"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md) › [Matcher](#interfaces_schema_index_matchermd)

## Interface: Matcher

### Hierarchy

* **Matcher**

  ↳ [FileMatcher](#interfaces_schema_index_filematchermd)

### Index

#### Properties

* [name](#name)
* [regex](#regex)
* [timestamp_capture_group](#timestamp_capture_group)

### Properties

####  name

• **name**: *string*

Defined in src/Schema/index.ts:25

___

####  regex

• **regex**: *string*

Defined in src/Schema/index.ts:24

___

####  timestamp_capture_group

• **timestamp_capture_group**: *number*

Defined in src/Schema/index.ts:26


<a name="interfaces_schema_index_schemamd"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md) › [Schema](#interfaces_schema_index_schemamd)

## Interface: Schema

### Hierarchy

* **Schema**

  ↳ [VersionedSchema](#interfaces_schema_index_versionedschemamd)

### Index

#### Properties

* [created_at](#created_at)
* [gettables](#gettables)
* [id](#id)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *Date*

Defined in src/Schema/index.ts:44

___

####  gettables

• **gettables**: *[Gettables](#gettables)*

Defined in src/Schema/index.ts:43

___

####  id

• **id**: *string*

Defined in src/Schema/index.ts:42

___

####  updated_at

• **updated_at**: *Date*

Defined in src/Schema/index.ts:45


<a name="interfaces_schema_index_versionedschemamd"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md) › [VersionedSchema](#interfaces_schema_index_versionedschemamd)

## Interface: VersionedSchema

### Hierarchy

* [Schema](#interfaces_schema_index_schemamd)

  ↳ **VersionedSchema**

### Index

#### Properties

* [created_at](#created_at)
* [gettables](#gettables)
* [id](#id)
* [schema_id](#schema_id)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *Date*

*Inherited from [Schema](#interfaces_schema_index_schemamd).[created_at](#created_at)*

Defined in src/Schema/index.ts:44

___

####  gettables

• **gettables**: *[Gettables](#gettables)*

*Inherited from [Schema](#interfaces_schema_index_schemamd).[gettables](#gettables)*

Defined in src/Schema/index.ts:43

___

####  id

• **id**: *string*

*Inherited from [Schema](#interfaces_schema_index_schemamd).[id](#id)*

Defined in src/Schema/index.ts:42

___

####  schema_id

• **schema_id**: *string*

Defined in src/Schema/index.ts:49

___

####  updated_at

• **updated_at**: *Date*

*Inherited from [Schema](#interfaces_schema_index_schemamd).[updated_at](#updated_at)*

Defined in src/Schema/index.ts:45


<a name="interfaces_tableannotation_tableannotationmd"></a>

[functional-types](#globalsmd) › ["TableAnnotation"](#modules_tableannotation_md) › [TableAnnotation](#interfaces_tableannotation_tableannotationmd)

## Interface: TableAnnotation

### Hierarchy

* **TableAnnotation**

### Index

#### Properties

* [boundingBoxesByPage](#boundingboxesbypage)
* [created_at](#created_at)
* [file](#file)
* [id](#id)
* [updated_at](#updated_at)

### Properties

####  boundingBoxesByPage

• **boundingBoxesByPage**: *[BoundingBoxesByPage](#boundingboxesbypage)*

Defined in src/TableAnnotation.ts:25

___

####  created_at

• **created_at**: *string*

Defined in src/TableAnnotation.ts:26

___

####  file

• **file**: *string*

Defined in src/TableAnnotation.ts:24

___

####  id

• **id**: *string*

Defined in src/TableAnnotation.ts:23

___

####  updated_at

• **updated_at**: *string*

Defined in src/TableAnnotation.ts:27


<a name="interfaces_vertex_index_boundingboxmd"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md) › [BoundingBox](#interfaces_vertex_index_boundingboxmd)

## Interface: BoundingBox

### Hierarchy

* **BoundingBox**

  ↳ [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [columns](#columns)
* [rows](#rows)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

Defined in src/Vertex/index.ts:50

___

####  columns

• **columns**: *[Line](#line)[]*

Defined in src/Vertex/index.ts:52

___

####  rows

• **rows**: *[Line](#line)[]*

Defined in src/Vertex/index.ts:51


<a name="interfaces_vertex_index_cornersmd"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md) › [Corners](#interfaces_vertex_index_cornersmd)

## Interface: Corners

### Hierarchy

* **Corners**

### Index

#### Properties

* [end](#end)
* [start](#start)

### Properties

####  end

• **end**: *[Vertex](#interfaces_vertex_index_vertexmd)*

Defined in src/Vertex/index.ts:77

___

####  start

• **start**: *[Vertex](#interfaces_vertex_index_vertexmd)*

Defined in src/Vertex/index.ts:76


<a name="interfaces_vertex_index_labeledboundingboxmd"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md) › [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)

## Interface: LabeledBoundingBox

### Hierarchy

* [BoundingBox](#interfaces_vertex_index_boundingboxmd)

  ↳ **LabeledBoundingBox**

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [columns](#columns)
* [id](#id)
* [label](#label)
* [rows](#rows)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

*Inherited from [BoundingBox](#interfaces_vertex_index_boundingboxmd).[boundingPoly](#boundingpoly)*

Defined in src/Vertex/index.ts:50

___

####  columns

• **columns**: *[Line](#line)[]*

*Inherited from [BoundingBox](#interfaces_vertex_index_boundingboxmd).[columns](#columns)*

Defined in src/Vertex/index.ts:52

___

####  id

• **id**: *string*

Defined in src/Vertex/index.ts:71

___

####  label

• **label**: *string*

Defined in src/Vertex/index.ts:72

___

####  rows

• **rows**: *[Line](#line)[]*

*Inherited from [BoundingBox](#interfaces_vertex_index_boundingboxmd).[rows](#rows)*

Defined in src/Vertex/index.ts:51


<a name="interfaces_vertex_index_rectanglemd"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md) › [Rectangle](#interfaces_vertex_index_rectanglemd)

## Interface: Rectangle

### Hierarchy

* **Rectangle**

### Index

#### Properties

* [x0](#x0)
* [x1](#x1)
* [y0](#y0)
* [y1](#y1)

### Properties

####  x0

• **x0**: *number*

Defined in src/Vertex/index.ts:81

___

####  x1

• **x1**: *number*

Defined in src/Vertex/index.ts:83

___

####  y0

• **y0**: *number*

Defined in src/Vertex/index.ts:82

___

####  y1

• **y1**: *number*

Defined in src/Vertex/index.ts:84


<a name="interfaces_vertex_index_vertexmd"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md) › [Vertex](#interfaces_vertex_index_vertexmd)

## Interface: Vertex

### Hierarchy

* **Vertex**

### Index

#### Properties

* [x](#x)
* [y](#y)

### Properties

####  x

• **x**: *number*

Defined in src/Vertex/index.ts:38

___

####  y

• **y**: *number*

Defined in src/Vertex/index.ts:39

# Modules


<a name="modules_datetime_md"></a>

[functional-types](#globalsmd) › ["DateTime"](#modules_datetime_md)

## Module: "DateTime"

### Index

#### Variables

* [getCurrentUnixTimestamp](#const-getcurrentunixtimestamp)

#### Functions

* [getCurrentDate](#const-getcurrentdate)
* [getCurrentISOString](#const-getcurrentisostring)
* [getUnixTimestamp](#const-getunixtimestamp)

### Variables

#### `Const` getCurrentUnixTimestamp

• **getCurrentUnixTimestamp**: *function* = Date.now

Defined in src/DateTime.ts:14

```haskell
getCurrentUnixTimestamp :: () -> Int
```

##### Type declaration:

▸ (): *number*

### Functions

#### `Const` getCurrentDate

▸ **getCurrentDate**(): *Date*

Defined in src/DateTime.ts:21

```haskell
getCurrentDate :: () -> Date
```

**Returns:** *Date*

___

#### `Const` getCurrentISOString

▸ **getCurrentISOString**(): *string*

Defined in src/DateTime.ts:28

```haskell
getCurrentISOString :: () -> string
```

**Returns:** *string*

___

#### `Const` getUnixTimestamp

▸ **getUnixTimestamp**(`date`: Date): *number*

Defined in src/DateTime.ts:6

```haskell
getUnixTimestamp :: Date -> Int
```

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *number*


<a name="modules_filetype_md"></a>

[functional-types](#globalsmd) › ["FileType"](#modules_filetype_md)

## Module: "FileType"

### Index

#### Type aliases

* [ContentType](#contenttype)
* [DocumentContentType](#documentcontenttype)
* [DocumentType](#documenttype)
* [FileType](#filetype)
* [ImageContentType](#imagecontenttype)
* [ImageType](#imagetype)

#### Variables

* [contentTypes](#const-contenttypes)
* [documentTypes](#const-documenttypes)
* [fileContentTypes](#const-filecontenttypes)
* [fileTypes](#const-filetypes)
* [fromContentType](#const-fromcontenttype)
* [fromDocumentContentType](#const-fromdocumentcontenttype)
* [fromImageContentType](#const-fromimagecontenttype)
* [imageContentTypes](#const-imagecontenttypes)
* [imageTypes](#const-imagetypes)
* [toContentType](#const-tocontenttype)
* [toDocumentContentType](#const-todocumentcontenttype)
* [toImageContentType](#const-toimagecontenttype)

#### Functions

* [isContentType](#const-iscontenttype)
* [isDocumentContentType](#const-isdocumentcontenttype)
* [isDocumentType](#const-isdocumenttype)
* [isFileType](#const-isfiletype)
* [isImageContentType](#const-isimagecontenttype)
* [isImageType](#const-isimagetype)

### Type aliases

####  ContentType

Ƭ **ContentType**: *[DocumentContentType](#documentcontenttype) | [ImageContentType](#imagecontenttype)*

Defined in src/FileType.ts:26

___

####  DocumentContentType

Ƭ **DocumentContentType**: *"application/pdf" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/json"*

Defined in src/FileType.ts:19

___

####  DocumentType

Ƭ **DocumentType**: *"pdf" | "excel" | "json"*

Defined in src/FileType.ts:13

___

####  FileType

Ƭ **FileType**: *[DocumentType](#documenttype) | [ImageType](#imagetype)*

Defined in src/FileType.ts:17

___

####  ImageContentType

Ƭ **ImageContentType**: *"image/png" | "image/jpeg"*

Defined in src/FileType.ts:24

___

####  ImageType

Ƭ **ImageType**: *"png" | "jpeg"*

Defined in src/FileType.ts:15

### Variables

#### `Const` contentTypes

• **contentTypes**: *[ContentType](#contenttype)[]* = values(FileTypeToContentType)

Defined in src/FileType.ts:151

```haskell
contentTypes: [ContentType]
```

___

#### `Const` documentTypes

• **documentTypes**: *[DocumentType](#documenttype)[]* = keys(DocumentTypeToContentType)

Defined in src/FileType.ts:112

```haskell
documentTypes: [DocumentType]
```

___

#### `Const` fileContentTypes

• **fileContentTypes**: *[DocumentContentType](#documentcontenttype)[]* = values(
  DocumentTypeToContentType
)

Defined in src/FileType.ts:133

```haskell
contentTypes: [DocumentContentType]
```

___

#### `Const` fileTypes

• **fileTypes**: *[FileType](#filetype)[]* = keys(FileTypeToContentType)

Defined in src/FileType.ts:126

```haskell
fileTypes: [FileType]
```

___

#### `Const` fromContentType

• **fromContentType**: *function* = prop(
  __,
  ContentTypeToFileType
)

Defined in src/FileType.ts:252

```haskell
fromContentType :: ContentType -> FileType
```

##### Type declaration:

▸ (`contentType`: [ContentType](#contenttype)): *[FileType](#filetype)*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | [ContentType](#contenttype) |

___

#### `Const` fromDocumentContentType

• **fromDocumentContentType**: *function* = prop(__, ContentTypeToDocumentType)

Defined in src/FileType.ts:234

```haskell
fromDocumentContentType :: DocumentContentType -> DocumentType
```

##### Type declaration:

▸ (`contentType`: [DocumentContentType](#documentcontenttype)): *[DocumentType](#documenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | [DocumentContentType](#documentcontenttype) |

___

#### `Const` fromImageContentType

• **fromImageContentType**: *function* = prop(__, ContentTypeToImageType)

Defined in src/FileType.ts:243

```haskell
fromImageContentType :: DocumentContentType -> DocumentType
```

##### Type declaration:

▸ (`contentType`: [ImageContentType](#imagecontenttype)): *[ImageType](#imagetype)*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | [ImageContentType](#imagecontenttype) |

___

#### `Const` imageContentTypes

• **imageContentTypes**: *[ImageContentType](#imagecontenttype)[]* = values(
  ImageTypeToContentType
)

Defined in src/FileType.ts:142

```haskell
imageContentTypes: [DocumentContentType]
```

___

#### `Const` imageTypes

• **imageTypes**: *[ImageType](#imagetype)[]* = keys(ImageTypeToContentType)

Defined in src/FileType.ts:119

```haskell
imageTypes: [DocumentType]
```

___

#### `Const` toContentType

• **toContentType**: *function* = prop(
  __,
  FileTypeToContentType
)

Defined in src/FileType.ts:224

```haskell
toContentType :: FileType -> ContentType
```

##### Type declaration:

▸ (`fileType`: [FileType](#filetype)): *[ContentType](#contenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`fileType` | [FileType](#filetype) |

___

#### `Const` toDocumentContentType

• **toDocumentContentType**: *function* = prop(__, DocumentTypeToContentType)

Defined in src/FileType.ts:206

```haskell
toDocumentContentType :: DocumentType -> DocumentContentType
```

##### Type declaration:

▸ (`fileType`: [DocumentType](#documenttype)): *[DocumentContentType](#documentcontenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`fileType` | [DocumentType](#documenttype) |

___

#### `Const` toImageContentType

• **toImageContentType**: *function* = prop(__, ImageTypeToContentType)

Defined in src/FileType.ts:215

```haskell
toImageContentType :: DocumentType -> ImageContentType
```

##### Type declaration:

▸ (`imageType`: [ImageType](#imagetype)): *[ImageContentType](#imagecontenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`imageType` | [ImageType](#imagetype) |

### Functions

#### `Const` isContentType

▸ **isContentType**(`a`: unknown): *a is ContentType*

Defined in src/FileType.ts:198

```haskell
isContentType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ContentType*

___

#### `Const` isDocumentContentType

▸ **isDocumentContentType**(`a`: unknown): *a is DocumentContentType*

Defined in src/FileType.ts:182

```haskell
isDocumentContentType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is DocumentContentType*

___

#### `Const` isDocumentType

▸ **isDocumentType**(`a`: unknown): *a is DocumentType*

Defined in src/FileType.ts:158

```haskell
isDocumentType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is DocumentType*

___

#### `Const` isFileType

▸ **isFileType**(`a`: unknown): *a is ImageType*

Defined in src/FileType.ts:174

```haskell
isFileType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ImageType*

___

#### `Const` isImageContentType

▸ **isImageContentType**(`a`: unknown): *a is ImageContentType*

Defined in src/FileType.ts:190

```haskell
isDocumentContentType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ImageContentType*

___

#### `Const` isImageType

▸ **isImageType**(`a`: unknown): *a is ImageType*

Defined in src/FileType.ts:166

```haskell
isImageType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ImageType*


<a name="modules_folder_arbitraries_md"></a>

[functional-types](#globalsmd) › ["Folder/Arbitraries"](#modules_folder_arbitraries_md)

## Module: "Folder/Arbitraries"

### Index

#### Functions

* [file](#const-file)
* [filesByType](#const-filesbytype)
* [folder](#const-folder)
* [invalidFolderObject](#const-invalidfolderobject)
* [metadata](#const-metadata)
* [nonFolderObject](#const-nonfolderobject)

### Functions

#### `Const` file

▸ **file**(): *Arbitrary‹[File](#file)›*

Defined in src/Folder/Arbitraries.ts:47

**Returns:** *Arbitrary‹[File](#file)›*

___

#### `Const` filesByType

▸ **filesByType**(): *Arbitrary‹[FilesByType](#filesbytype)›*

Defined in src/Folder/Arbitraries.ts:57

**Returns:** *Arbitrary‹[FilesByType](#filesbytype)›*

___

#### `Const` folder

▸ **folder**(): *Arbitrary‹[Folder](#interfaces_folder_index_foldermd)›*

Defined in src/Folder/Arbitraries.ts:29

**Returns:** *Arbitrary‹[Folder](#interfaces_folder_index_foldermd)›*

___

#### `Const` invalidFolderObject

▸ **invalidFolderObject**(): *Arbitrary‹Record‹string, any››*

Defined in src/Folder/Arbitraries.ts:5

**Returns:** *Arbitrary‹Record‹string, any››*

___

#### `Const` metadata

▸ **metadata**(): *Arbitrary‹[Metadata](#interfaces_folder_index_metadatamd)›*

Defined in src/Folder/Arbitraries.ts:32

**Returns:** *Arbitrary‹[Metadata](#interfaces_folder_index_metadatamd)›*

___

#### `Const` nonFolderObject

▸ **nonFolderObject**(): *Arbitrary‹unknown›*

Defined in src/Folder/Arbitraries.ts:15

**Returns:** *Arbitrary‹unknown›*


<a name="modules_folder_index_md"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md)

## Module: "Folder/index"

### Index

#### Interfaces

* [Attributes](#interfaces_folder_index_attributesmd)
* [Folder](#interfaces_folder_index_foldermd)
* [Metadata](#interfaces_folder_index_metadatamd)

#### Type aliases

* [File](#file)
* [FilesByType](#filesbytype)

#### Variables

* [getAttributesFromName](#const-getattributesfromname)

#### Functions

* [fromMetadata](#const-frommetadata)
* [isFile](#const-isfile)
* [isFileArray](#const-isfilearray)
* [isFilesByType](#const-isfilesbytype)
* [isFolder](#const-isfolder)
* [isMetadata](#const-ismetadata)
* [make](#const-make)

### Type aliases

####  File

Ƭ **File**: *[Attributes](#interfaces_folder_index_attributesmd) & object*

Defined in src/Folder/index.ts:48

___

####  FilesByType

Ƭ **FilesByType**: *Record‹FT.DocumentType, [File](#file)[]›*

Defined in src/Folder/index.ts:50

### Variables

#### `Const` getAttributesFromName

• **getAttributesFromName**: *function* = pipe(
  split('/'),
  E.fromPredicate(
    (segments: string[]) => segments.length >= 2,
    () => new Error('Invalid file name format.')
  ),
  E.map(([folder, ...names]: string[]) => {
    const name = names.join('/');
    return {
      id: join('/')([folder, name]),
      folder,
      name,
    };
  })
)

Defined in src/Folder/index.ts:157

```haskell
getAttributesFromName :: String -> Either Attributes Error
```

##### Type declaration:

▸ (`name`: string): *E.Either‹Error, Omit‹[Attributes](#interfaces_folder_index_attributesmd), "type"››*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

### Functions

#### `Const` fromMetadata

▸ **fromMetadata**(`metadata`: [Metadata](#interfaces_folder_index_metadatamd)): *Left‹Error› | Right‹object›*

Defined in src/Folder/index.ts:180

```haskell
fromMetadata :: Metadata -> Either
```

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [Metadata](#interfaces_folder_index_metadatamd) |

**Returns:** *Left‹Error› | Right‹object›*

___

#### `Const` isFile

▸ **isFile**(`a`: unknown): *a is File*

Defined in src/Folder/index.ts:130

```haskell
isFile :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is File*

___

#### `Const` isFileArray

▸ **isFileArray**(`a`: unknown): *a is File[]*

Defined in src/Folder/index.ts:138

```haskell
isFileArray :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is File[]*

___

#### `Const` isFilesByType

▸ **isFilesByType**(`a`: unknown): *a is FilesByType*

Defined in src/Folder/index.ts:146

```haskell
isFilesByType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is FilesByType*

___

#### `Const` isFolder

▸ **isFolder**(`a`: unknown): *a is Folder*

Defined in src/Folder/index.ts:57

```haskell
isFolder -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Folder*

___

#### `Const` isMetadata

▸ **isMetadata**(`a`: unknown): *a is Metadata*

Defined in src/Folder/index.ts:107

```haskell
isMetadata :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Metadata*

___

#### `Const` make

▸ **make**(`name`: string): *(Anonymous function)*

Defined in src/Folder/index.ts:71

```haskell
make :: String -> Folder
```

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *(Anonymous function)*


<a name="modules_index_md"></a>

[functional-types](#globalsmd) › ["index"](#modules_index_md)

## Module: "index"

### Index

#### References

* [F](#f)
* [FT](#ft)
* [L](#l)
* [T](#t)
* [V](#v)

### References

####  F

• **F**:

___

####  FT

• **FT**:

___

####  L

• **L**:

___

####  T

• **T**:

___

####  V

• **V**:


<a name="modules_label_md"></a>

[functional-types](#globalsmd) › ["Label"](#modules_label_md)

## Module: "Label"

### Index

#### Interfaces

* [Label](#interfaces_label_labelmd)

#### Type aliases

* [ColorMappings](#colormappings)

#### Variables

* [toColorMappings](#const-tocolormappings)

#### Functions

* [isLabel](#const-islabel)

### Type aliases

####  ColorMappings

Ƭ **ColorMappings**: *Record‹string, string›*

Defined in src/Label.ts:9

### Variables

#### `Const` toColorMappings

• **toColorMappings**: *function* = reduce(
  (acc: ColorMappings, label: Label) => assoc(label.id, label.color)(acc),
  {}
)

Defined in src/Label.ts:29

```haskell
toColorMappings :: [Label] -> ColorMappings
```

##### Type declaration:

▸ (`labels`: [Label](#interfaces_label_labelmd)[]): *[ColorMappings](#colormappings)*

**Parameters:**

Name | Type |
------ | ------ |
`labels` | [Label](#interfaces_label_labelmd)[] |

### Functions

#### `Const` isLabel

▸ **isLabel**(`a`: unknown): *a is Label*

Defined in src/Label.ts:16

```haskell
isLabel :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Label*


<a name="modules_schema_arbitraries_md"></a>

[functional-types](#globalsmd) › ["Schema/Arbitraries"](#modules_schema_arbitraries_md)

## Module: "Schema/Arbitraries"

### Index

#### Variables

* [regex](#const-regex)

#### Functions

* [fileMatcher](#const-filematcher)
* [fileType](#const-filetype)
* [gettable](#const-gettable)
* [gettables](#const-gettables)
* [invalidGettableObject](#const-invalidgettableobject)
* [invalidMatcherObject](#const-invalidmatcherobject)
* [invalidSchemaObject](#const-invalidschemaobject)
* [matcher](#const-matcher)
* [nonEmptyString](#const-nonemptystring)
* [nonGettableObject](#const-nongettableobject)
* [nonMatcherObject](#const-nonmatcherobject)
* [nonNumber](#const-nonnumber)
* [nonSchemaObject](#const-nonschemaobject)
* [nonString](#const-nonstring)
* [schema](#const-schema)
* [singletonFileMatcher](#const-singletonfilematcher)
* [versionedSchema](#const-versionedschema)

### Variables

#### `Const` regex

• **regex**: *nonEmptyString* = nonEmptyString

Defined in src/Schema/Arbitraries.ts:85

### Functions

#### `Const` fileMatcher

▸ **fileMatcher**(): *Arbitrary‹[FileMatcher](#interfaces_schema_index_filematchermd)›*

Defined in src/Schema/Arbitraries.ts:100

**Returns:** *Arbitrary‹[FileMatcher](#interfaces_schema_index_filematchermd)›*

___

#### `Const` fileType

▸ **fileType**(): *Arbitrary‹[Type](#type)›*

Defined in src/Schema/Arbitraries.ts:75

**Returns:** *Arbitrary‹[Type](#type)›*

___

#### `Const` gettable

▸ **gettable**(): *Arbitrary‹[Gettable](#interfaces_schema_index_gettablemd)›*

Defined in src/Schema/Arbitraries.ts:105

**Returns:** *Arbitrary‹[Gettable](#interfaces_schema_index_gettablemd)›*

___

#### `Const` gettables

▸ **gettables**(): *Arbitrary‹Record‹string, [Gettable](#interfaces_schema_index_gettablemd)››*

Defined in src/Schema/Arbitraries.ts:112

**Returns:** *Arbitrary‹Record‹string, [Gettable](#interfaces_schema_index_gettablemd)››*

___

#### `Const` invalidGettableObject

▸ **invalidGettableObject**(): *Arbitrary‹Dictionary‹unknown››*

Defined in src/Schema/Arbitraries.ts:40

**Returns:** *Arbitrary‹Dictionary‹unknown››*

___

#### `Const` invalidMatcherObject

▸ **invalidMatcherObject**(): *Arbitrary‹Dictionary‹unknown››*

Defined in src/Schema/Arbitraries.ts:20

**Returns:** *Arbitrary‹Dictionary‹unknown››*

___

#### `Const` invalidSchemaObject

▸ **invalidSchemaObject**(): *Arbitrary‹Dictionary‹unknown››*

Defined in src/Schema/Arbitraries.ts:60

**Returns:** *Arbitrary‹Dictionary‹unknown››*

___

#### `Const` matcher

▸ **matcher**(): *Arbitrary‹[Matcher](#interfaces_schema_index_matchermd)›*

Defined in src/Schema/Arbitraries.ts:87

**Returns:** *Arbitrary‹[Matcher](#interfaces_schema_index_matchermd)›*

___

#### `Const` nonEmptyString

▸ **nonEmptyString**(): *Arbitrary‹string›*

Defined in src/Schema/Arbitraries.ts:12

**Returns:** *Arbitrary‹string›*

___

#### `Const` nonGettableObject

▸ **nonGettableObject**(): *Arbitrary‹unknown›*

Defined in src/Schema/Arbitraries.ts:53

**Returns:** *Arbitrary‹unknown›*

___

#### `Const` nonMatcherObject

▸ **nonMatcherObject**(): *Arbitrary‹unknown›*

Defined in src/Schema/Arbitraries.ts:29

**Returns:** *Arbitrary‹unknown›*

___

#### `Const` nonNumber

▸ **nonNumber**(): *Arbitrary‹unknown›*

Defined in src/Schema/Arbitraries.ts:17

**Returns:** *Arbitrary‹unknown›*

___

#### `Const` nonSchemaObject

▸ **nonSchemaObject**(): *Arbitrary‹unknown›*

Defined in src/Schema/Arbitraries.ts:68

**Returns:** *Arbitrary‹unknown›*

___

#### `Const` nonString

▸ **nonString**(): *Arbitrary‹unknown›*

Defined in src/Schema/Arbitraries.ts:14

**Returns:** *Arbitrary‹unknown›*

___

#### `Const` schema

▸ **schema**(): *Arbitrary‹[Schema](#interfaces_schema_index_schemamd)›*

Defined in src/Schema/Arbitraries.ts:122

**Returns:** *Arbitrary‹[Schema](#interfaces_schema_index_schemamd)›*

___

#### `Const` singletonFileMatcher

▸ **singletonFileMatcher**(): *Arbitrary‹[FileMatcher](#interfaces_schema_index_filematchermd)›*

Defined in src/Schema/Arbitraries.ts:94

**Returns:** *Arbitrary‹[FileMatcher](#interfaces_schema_index_filematchermd)›*

___

#### `Const` versionedSchema

▸ **versionedSchema**(): *Arbitrary‹[VersionedSchema](#interfaces_schema_index_versionedschemamd)›*

Defined in src/Schema/Arbitraries.ts:130

**Returns:** *Arbitrary‹[VersionedSchema](#interfaces_schema_index_versionedschemamd)›*


<a name="modules_schema_index_md"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md)

## Module: "Schema/index"

### Index

#### Interfaces

* [FileMatcher](#interfaces_schema_index_filematchermd)
* [Gettable](#interfaces_schema_index_gettablemd)
* [Matcher](#interfaces_schema_index_matchermd)
* [Schema](#interfaces_schema_index_schemamd)
* [VersionedSchema](#interfaces_schema_index_versionedschemamd)

#### Type aliases

* [Dictionary](#dictionary)
* [Gettables](#gettables)
* [Type](#type)

#### Functions

* [isGettable](#const-isgettable)
* [isGettables](#const-isgettables)
* [isMatcher](#const-ismatcher)
* [isSchema](#const-isschema)
* [isVersionedSchema](#const-isversionedschema)
* [makeSchema](#const-makeschema)
* [toVersionedSchema](#const-toversionedschema)

### Type aliases

####  Dictionary

Ƭ **Dictionary**: *Record‹string, A›*

Defined in src/Schema/index.ts:21

___

####  Gettables

Ƭ **Gettables**: *[Dictionary](#dictionary)‹[Gettable](#interfaces_schema_index_gettablemd)›*

Defined in src/Schema/index.ts:39

___

####  Type

Ƭ **Type**: *"pdf" | "excel" | "json" | "pdf-region" | "excel-sheet" | "json-child"*

Defined in src/Schema/index.ts:13

### Functions

#### `Const` isGettable

▸ **isGettable**(`a`: unknown): *a is Gettable*

Defined in src/Schema/index.ts:70

```haskell
isGettable -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Gettable*

___

#### `Const` isGettables

▸ **isGettables**(`a`: unknown): *a is Gettables*

Defined in src/Schema/index.ts:82

```haskell
isGettables -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Gettables*

___

#### `Const` isMatcher

▸ **isMatcher**(`a`: unknown): *a is Matcher*

Defined in src/Schema/index.ts:57

```haskell
isMatcher -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Matcher*

___

#### `Const` isSchema

▸ **isSchema**(`a`: unknown): *a is Schema*

Defined in src/Schema/index.ts:90

```haskell
isSchema -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Schema*

___

#### `Const` isVersionedSchema

▸ **isVersionedSchema**(`a`: unknown): *a is VersionedSchema*

Defined in src/Schema/index.ts:130

```haskell
isVersionedSchema :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is VersionedSchema*

___

#### `Const` makeSchema

▸ **makeSchema**(`gettables`: object): *object*

Defined in src/Schema/index.ts:102

```haskell
makeSchema :: Gettables -> Schema
```

**Parameters:**

Name | Type |
------ | ------ |
`gettables` | object |

**Returns:** *object*

* **created_at**: *Date* = date

* **gettables**(): *object*

* **id**: *string* = getRandomId()

* **updated_at**: *Date* = date

___

#### `Const` toVersionedSchema

▸ **toVersionedSchema**(`schema`: [Schema](#interfaces_schema_index_schemamd)): *object*

Defined in src/Schema/index.ts:117

```haskell
toVersionedSchema :: Schema -> VersionedSchema
```

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [Schema](#interfaces_schema_index_schemamd) |

**Returns:** *object*

* **id**: *string* = getRandomId()

* **schema_id**: *string* = schema.id


<a name="modules_string_md"></a>

[functional-types](#globalsmd) › ["String"](#modules_string_md)

## Module: "String"

### Index

#### Variables

* [getRandomId](#const-getrandomid)

### Variables

#### `Const` getRandomId

• **getRandomId**: *IO‹string›* = uuid

Defined in src/String.ts:9

```haskell
getRandomId: IO String
```


<a name="modules_tableannotation_md"></a>

[functional-types](#globalsmd) › ["TableAnnotation"](#modules_tableannotation_md)

## Module: "TableAnnotation"

### Index

#### Interfaces

* [TableAnnotation](#interfaces_tableannotation_tableannotationmd)

#### Type aliases

* [BoundingBoxes](#boundingboxes)
* [BoundingBoxesByPage](#boundingboxesbypage)
* [TableAnnotationBase](#tableannotationbase)

#### Functions

* [isBoundingBoxes](#const-isboundingboxes)
* [isBoundingBoxesByPage](#const-isboundingboxesbypage)
* [isTableAnnotation](#const-istableannotation)
* [isTableAnnotationBase](#const-istableannotationbase)
* [make](#const-make)

### Type aliases

####  BoundingBoxes

Ƭ **BoundingBoxes**: *Dictionary‹[WithHeader](#withheader)‹[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)› | [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)›*

Defined in src/TableAnnotation.ts:16

___

####  BoundingBoxesByPage

Ƭ **BoundingBoxesByPage**: *[BoundingBoxes](#boundingboxes)[]*

Defined in src/TableAnnotation.ts:20

___

####  TableAnnotationBase

Ƭ **TableAnnotationBase**: *Pick‹[TableAnnotation](#interfaces_tableannotation_tableannotationmd), "file" | "boundingBoxesByPage"›*

Defined in src/TableAnnotation.ts:30

### Functions

#### `Const` isBoundingBoxes

▸ **isBoundingBoxes**(`a`: unknown): *a is BoundingBoxes*

Defined in src/TableAnnotation.ts:40

```haskell
isBoundingBoxes :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is BoundingBoxes*

___

#### `Const` isBoundingBoxesByPage

▸ **isBoundingBoxesByPage**(`a`: unknown): *a is BoundingBoxesByPage*

Defined in src/TableAnnotation.ts:51

```haskell
isBoundingBoxesByPage :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is BoundingBoxesByPage*

___

#### `Const` isTableAnnotation

▸ **isTableAnnotation**(`a`: unknown): *a is TableAnnotation*

Defined in src/TableAnnotation.ts:71

```haskell
isTableAnnotation :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is TableAnnotation*

___

#### `Const` isTableAnnotationBase

▸ **isTableAnnotationBase**(`a`: unknown): *a is TableAnnotationBase*

Defined in src/TableAnnotation.ts:59

```haskell
isTableAnnotationBase :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is TableAnnotationBase*

___

#### `Const` make

▸ **make**(`__namedParameters`: object): *(Anonymous function)*

Defined in src/TableAnnotation.ts:86

```haskell
make :: (String, BoundingBoxesByPage) -> IO TableAnnotation
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`boundingBoxesByPage` | Dictionary‹[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd) &#124; [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd) & object &#124; [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd) & object›[] |
`file` | string |

**Returns:** *(Anonymous function)*


<a name="modules_vertex_arbitraries_md"></a>

[functional-types](#globalsmd) › ["Vertex/Arbitraries"](#modules_vertex_arbitraries_md)

## Module: "Vertex/Arbitraries"

### Index

#### Functions

* [boundingBox](#const-boundingbox)
* [overlaps](#const-overlaps)
* [poly](#const-poly)
* [separates](#const-separates)
* [vertex](#const-vertex)
* [withHeaderArguments](#const-withheaderarguments)

### Functions

#### `Const` boundingBox

▸ **boundingBox**(): *Arbitrary‹[BoundingBox](#interfaces_vertex_index_boundingboxmd)›*

Defined in src/Vertex/Arbitraries.ts:38

**Returns:** *Arbitrary‹[BoundingBox](#interfaces_vertex_index_boundingboxmd)›*

___

#### `Const` overlaps

▸ **overlaps**(): *Arbitrary‹[[Poly](#poly), [Poly](#poly)]›*

Defined in src/Vertex/Arbitraries.ts:31

**Returns:** *Arbitrary‹[[Poly](#poly), [Poly](#poly)]›*

___

#### `Const` poly

▸ **poly**(): *Arbitrary‹[Poly](#poly)›*

Defined in src/Vertex/Arbitraries.ts:21

**Returns:** *Arbitrary‹[Poly](#poly)›*

___

#### `Const` separates

▸ **separates**(): *Arbitrary‹[[Poly](#poly), [Poly](#poly)]›*

Defined in src/Vertex/Arbitraries.ts:24

**Returns:** *Arbitrary‹[[Poly](#poly), [Poly](#poly)]›*

___

#### `Const` vertex

▸ **vertex**(): *Arbitrary‹[Vertex](#interfaces_vertex_index_vertexmd)›*

Defined in src/Vertex/Arbitraries.ts:15

**Returns:** *Arbitrary‹[Vertex](#interfaces_vertex_index_vertexmd)›*

___

#### `Const` withHeaderArguments

▸ **withHeaderArguments**(): *Arbitrary‹object›*

Defined in src/Vertex/Arbitraries.ts:50

**Returns:** *Arbitrary‹object›*


<a name="modules_vertex_index_md"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md)

## Module: "Vertex/index"

### Index

#### Interfaces

* [BoundingBox](#interfaces_vertex_index_boundingboxmd)
* [Corners](#interfaces_vertex_index_cornersmd)
* [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)
* [Rectangle](#interfaces_vertex_index_rectanglemd)
* [Vertex](#interfaces_vertex_index_vertexmd)

#### Type aliases

* [Line](#line)
* [Poly](#poly)
* [WithHeader](#withheader)
* [WithHeaderColumn](#withheadercolumn)
* [WithHeaderRow](#withheaderrow)
* [WithHeaders](#withheaders)

#### Variables

* [areaOf](#const-areaof)
* [getBottomLeft](#const-getbottomleft)
* [getBottomRight](#const-getbottomright)
* [getCornersFromPoly](#const-getcornersfrompoly)
* [getTopLeft](#const-gettopleft)
* [getTopRight](#const-gettopright)
* [getX](#const-getx)
* [getXs](#const-getxs)
* [getY](#const-gety)
* [getYs](#const-getys)
* [heightOf](#const-heightof)
* [widthOf](#const-widthof)

#### Functions

* [append](#const-append)
* [containedBy](#const-containedby)
* [contains](#const-contains)
* [hasHeader](#const-hasheader)
* [hasHeaderColumn](#const-hasheadercolumn)
* [hasHeaderRow](#const-hasheaderrow)
* [hasHeaders](#const-hasheaders)
* [intersects](#const-intersects)
* [isBoundingBox](#const-isboundingbox)
* [isLabeledBoundingBox](#const-islabeledboundingbox)
* [isLine](#const-isline)
* [isPoly](#const-ispoly)
* [isVertex](#const-isvertex)
* [lengthOf](#const-lengthof)
* [makeBoundingBox](#const-makeboundingbox)
* [makeLabeledBoundingBox](#const-makelabeledboundingbox)
* [makeLine](#const-makeline)
* [makePoly](#const-makepoly)
* [makeVertex](#const-makevertex)
* [sortPoly](#const-sortpoly)
* [toPoly](#const-topoly)
* [toRectangle](#const-torectangle)
* [withHeader](#const-withheader)
* [withHeaderColumn](#const-withheadercolumn)
* [withHeaderRow](#const-withheaderrow)

### Type aliases

####  Line

Ƭ **Line**: *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

Defined in src/Vertex/index.ts:42

___

####  Poly

Ƭ **Poly**: *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

Defined in src/Vertex/index.ts:47

[TopLeft, TopRight, BottomLeft, BottomRight]

___

####  WithHeader

Ƭ **WithHeader**: *[WithHeaderRow](#withheaderrow)‹A› | [WithHeaderColumn](#withheadercolumn)‹A›*

Defined in src/Vertex/index.ts:63

___

####  WithHeaderColumn

Ƭ **WithHeaderColumn**: *A & object*

Defined in src/Vertex/index.ts:59

___

####  WithHeaderRow

Ƭ **WithHeaderRow**: *A & object*

Defined in src/Vertex/index.ts:55

___

####  WithHeaders

Ƭ **WithHeaders**: *[WithHeaderRow](#withheaderrow)‹A› & [WithHeaderColumn](#withheadercolumn)‹A›*

Defined in src/Vertex/index.ts:67

### Variables

#### `Const` areaOf

• **areaOf**: *function* = converge(multiply, [
  widthOf,
  heightOf,
])

Defined in src/Vertex/index.ts:552

```haskell
areaOf :: Poly -> Float
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getBottomLeft

• **getBottomLeft**: *function* = nth(2)

Defined in src/Vertex/index.ts:426

```haskell
getBottomLeft :: Poly -> Vertex
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *[Vertex](#interfaces_vertex_index_vertexmd)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getBottomRight

• **getBottomRight**: *function* = nth(3)

Defined in src/Vertex/index.ts:433

```haskell
getBottomRight :: Poly -> Vertex
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *[Vertex](#interfaces_vertex_index_vertexmd)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getCornersFromPoly

• **getCornersFromPoly**: *function* = applySpec({
  start: head,
  end: last,
})

Defined in src/Vertex/index.ts:275

```haskell
getCornersFromPoly :: Poly -> Corners
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *[Corners](#interfaces_vertex_index_cornersmd)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getTopLeft

• **getTopLeft**: *function* = nth(0)

Defined in src/Vertex/index.ts:412

```haskell
getTopLeft :: Poly -> Vertex
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *[Vertex](#interfaces_vertex_index_vertexmd)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getTopRight

• **getTopRight**: *function* = nth(1)

Defined in src/Vertex/index.ts:419

```haskell
getTopRight :: Poly -> Vertex
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *[Vertex](#interfaces_vertex_index_vertexmd)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getX

• **getX**: *function* = pipe(head, prop<'x', number>('x'))

Defined in src/Vertex/index.ts:343

```haskell
getX :: Line -> Float
```

##### Type declaration:

▸ (`line`: [Line](#line)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Line](#line) |

___

#### `Const` getXs

• **getXs**: *function* = map(getX)

Defined in src/Vertex/index.ts:357

```haskell
getXs :: [Line] -> [Float]
```

##### Type declaration:

▸ (`lines`: [Line](#line)[]): *number[]*

**Parameters:**

Name | Type |
------ | ------ |
`lines` | [Line](#line)[] |

___

#### `Const` getY

• **getY**: *function* = pipe(head, prop<'y', number>('y'))

Defined in src/Vertex/index.ts:336

```haskell
getY :: Line -> Float
```

##### Type declaration:

▸ (`line`: [Line](#line)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Line](#line) |

___

#### `Const` getYs

• **getYs**: *function* = map(getY)

Defined in src/Vertex/index.ts:350

```haskell
getYs :: [Line] -> [Float]
```

##### Type declaration:

▸ (`lines`: [Line](#line)[]): *number[]*

**Parameters:**

Name | Type |
------ | ------ |
`lines` | [Line](#line)[] |

___

#### `Const` heightOf

• **heightOf**: *function* = converge(subtract, [
  pipe(getBottomLeft, prop('y')),
  pipe(getTopLeft, prop('y')),
])

Defined in src/Vertex/index.ts:542

```haskell
heightOf :: Poly -> Float
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` widthOf

• **widthOf**: *function* = converge(subtract, [
  pipe(getTopRight, prop('x')),
  pipe(getTopLeft, prop('x')),
])

Defined in src/Vertex/index.ts:532

```haskell
widthOf :: Poly -> Float
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

### Functions

#### `Const` append

▸ **append**<**A**>(`boundingBox`: A): *(Anonymous function)*

Defined in src/Vertex/index.ts:395

```haskell
append :: BoundingBox -> ([Float], [Float]) -> BoundingBox
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`boundingBox` | A |

**Returns:** *(Anonymous function)*

___

#### `Const` containedBy

▸ **containedBy**(`p0`: [Poly](#poly)): *function*

Defined in src/Vertex/index.ts:623

```haskell
containedBy :: Poly -> Reader Poly Float
```

**Parameters:**

Name | Type |
------ | ------ |
`p0` | [Poly](#poly) |

**Returns:** *function*

▸ (...`a`: keyof any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | keyof any[] |

___

#### `Const` contains

▸ **contains**(`p0`: [Poly](#poly)): *(Anonymous function)*

Defined in src/Vertex/index.ts:637

```haskell
contains :: Poly -> Reader Poly Float
```

**Parameters:**

Name | Type |
------ | ------ |
`p0` | [Poly](#poly) |

**Returns:** *(Anonymous function)*

___

#### `Const` hasHeader

▸ **hasHeader**<**A**>(`a`: A): *a is WithHeader<A>*

Defined in src/Vertex/index.ts:162

```haskell
hasHeader :: a -> bool
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *a is WithHeader<A>*

___

#### `Const` hasHeaderColumn

▸ **hasHeaderColumn**<**A**>(`a`: A): *a is WithHeaderColumn<A>*

Defined in src/Vertex/index.ts:153

```haskell
hasHeaderColumn :: a -> bool
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *a is WithHeaderColumn<A>*

___

#### `Const` hasHeaderRow

▸ **hasHeaderRow**<**A**>(`a`: A): *a is WithHeaderRow<A>*

Defined in src/Vertex/index.ts:144

```haskell
hasHeaderRow :: a -> bool
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *a is WithHeaderRow<A>*

___

#### `Const` hasHeaders

▸ **hasHeaders**<**A**>(`a`: A): *a is WithHeaders<A>*

Defined in src/Vertex/index.ts:170

```haskell
hasHeaders :: a -> bool
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *a is WithHeaders<A>*

___

#### `Const` intersects

▸ **intersects**(`p0`: [Poly](#poly)): *(Anonymous function)*

Defined in src/Vertex/index.ts:597

```haskell
intersects :: Poly -> Reader Poly Poly
```

**Parameters:**

Name | Type |
------ | ------ |
`p0` | [Poly](#poly) |

**Returns:** *(Anonymous function)*

___

#### `Const` isBoundingBox

▸ **isBoundingBox**(`a`: unknown): *a is BoundingBox*

Defined in src/Vertex/index.ts:132

```haskell
isBoundingBox :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is BoundingBox*

___

#### `Const` isLabeledBoundingBox

▸ **isLabeledBoundingBox**(`a`: unknown): *a is LabeledBoundingBox*

Defined in src/Vertex/index.ts:364

```haskell
isLabeledBoundingBox :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is LabeledBoundingBox*

___

#### `Const` isLine

▸ **isLine**(`a`: unknown): *a is Line*

Defined in src/Vertex/index.ts:100

```haskell
isLine :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Line*

___

#### `Const` isPoly

▸ **isPoly**(`a`: unknown): *a is Poly*

Defined in src/Vertex/index.ts:112

```haskell
isPoly :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Poly*

___

#### `Const` isVertex

▸ **isVertex**(`a`: unknown): *a is Vertex*

Defined in src/Vertex/index.ts:92

```haskell
isVertex :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Vertex*

___

#### `Const` lengthOf

▸ **lengthOf**(`__namedParameters`: [any, any]): *number*

Defined in src/Vertex/index.ts:562

```haskell
lengthOf :: Line -> Float
```

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | [any, any] |

**Returns:** *number*

___

#### `Const` makeBoundingBox

▸ **makeBoundingBox**(`poly`: [Poly](#poly), `ys`: number[], `xs`: number[]): *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

Defined in src/Vertex/index.ts:317

```haskell
makeBoundingBox :: (Poly, [Float], [Float]) -> BoundingBox
```

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |
`ys` | number[] |
`xs` | number[] |

**Returns:** *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

___

#### `Const` makeLabeledBoundingBox

▸ **makeLabeledBoundingBox**(`id`: string, `label`: string, `poly`: [Poly](#poly), `ys`: number[], `xs`: number[]): *[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)*

Defined in src/Vertex/index.ts:372

```haskell
makeLabeledBoundingBox :: (String, String, Poly, [Float], [Float]) -> LabeledBoundingBox
```

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`label` | string |
`poly` | [Poly](#poly) |
`ys` | number[] |
`xs` | number[] |

**Returns:** *[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)*

___

#### `Const` makeLine

▸ **makeLine**(`x0`: number, `y0`: number, `x1`: number, `y1`: number): *[Line](#line)*

Defined in src/Vertex/index.ts:185

```haskell
makeVertex :: (Float, Float, Float, Float) -> Line
```

**Parameters:**

Name | Type |
------ | ------ |
`x0` | number |
`y0` | number |
`x1` | number |
`y1` | number |

**Returns:** *[Line](#line)*

___

#### `Const` makePoly

▸ **makePoly**(...`coords`: [number, number, number, number]): *[Poly](#poly)*

Defined in src/Vertex/index.ts:250

```haskell
makePoly :: (Float, Float, Float, Float) -> Poly
```

**Parameters:**

Name | Type |
------ | ------ |
`...coords` | [number, number, number, number] |

**Returns:** *[Poly](#poly)*

___

#### `Const` makeVertex

▸ **makeVertex**(`x`: number, `y`: number): *[Vertex](#interfaces_vertex_index_vertexmd)*

Defined in src/Vertex/index.ts:178

```haskell
makeVertex :: (Float, Float) -> Vertex
```

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *[Vertex](#interfaces_vertex_index_vertexmd)*

___

#### `Const` sortPoly

▸ **sortPoly**(`__namedParameters`: [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]): *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

Defined in src/Vertex/index.ts:262

```haskell
sortPoly :: Poly -> Poly
```

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)] |

**Returns:** *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

___

#### `Const` toPoly

▸ **toPoly**(`__namedParameters`: object): *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

Defined in src/Vertex/index.ts:589

```haskell
toPoly :: Rectangle -> Poly
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`x0` | number |
`x1` | number |
`y0` | number |
`y1` | number |

**Returns:** *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

___

#### `Const` toRectangle

▸ **toRectangle**(`__namedParameters`: [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]): *object*

Defined in src/Vertex/index.ts:572

```haskell
toRectangle :: Poly -> Rectangle
```

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)] |

**Returns:** *object*

* **x0**: *number* = topLeft.x

* **x1**: *number* = bottomRight.x

* **y0**: *number* = topRight.y

* **y1**: *number* = bottomLeft.y

___

#### `Const` withHeader

▸ **withHeader**(`vertex`: [Vertex](#interfaces_vertex_index_vertexmd)): *(Anonymous function)*

Defined in src/Vertex/index.ts:517

```haskell
withHeader :: Vertex -> ReaderEither BoundingBox (WithHeader BoundingBox) BoundingBox
```

**Parameters:**

Name | Type |
------ | ------ |
`vertex` | [Vertex](#interfaces_vertex_index_vertexmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` withHeaderColumn

▸ **withHeaderColumn**(`x`: number): *(Anonymous function)*

Defined in src/Vertex/index.ts:480

```haskell
withHeaderColumn :: Float -> ReaderEither BoundingBox BoundingBox (WithHeaderColumn BoundingBox)
```

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *(Anonymous function)*

___

#### `Const` withHeaderRow

▸ **withHeaderRow**(`y`: number): *(Anonymous function)*

Defined in src/Vertex/index.ts:442

```haskell
withHeaderRow :: Float -> ReaderEither BoundingBox BoundingBox (WithHeaderRow BoundingBox)
```

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

**Returns:** *(Anonymous function)*

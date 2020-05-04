
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
* ["TextAnnotation"](#modules_textannotation_md)
* ["Vertex/Arbitraries"](#modules_vertex_arbitraries_md)
* ["Vertex/index"](#modules_vertex_index_md)
* ["Vision"](#modules_vision_md)
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


<a name="interfaces_folder_index_referencemd"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md) › [Reference](#interfaces_folder_index_referencemd)

## Interface: Reference

### Hierarchy

* **Reference**

### Index

#### Properties

* [file](#file)

### Properties

####  file

• **file**: *string*

Defined in src/Folder/index.ts:49


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


<a name="interfaces_textannotation_pagemd"></a>

[functional-types](#globalsmd) › ["TextAnnotation"](#modules_textannotation_md) › [Page](#interfaces_textannotation_pagemd)

## Interface: Page

### Hierarchy

* **Page**

### Index

#### Properties

* [paragraphsById](#paragraphsbyid)
* [wordsById](#wordsbyid)

### Properties

####  paragraphsById

• **paragraphsById**: *[ParagraphsById](#paragraphsbyid)*

Defined in src/TextAnnotation.ts:68

___

####  wordsById

• **wordsById**: *[WordsById](#wordsbyid)*

Defined in src/TextAnnotation.ts:67


<a name="interfaces_textannotation_paragraphmd"></a>

[functional-types](#globalsmd) › ["TextAnnotation"](#modules_textannotation_md) › [Paragraph](#interfaces_textannotation_paragraphmd)

## Interface: Paragraph

### Hierarchy

* **Paragraph**

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [confidence](#confidence)
* [id](#id)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

Defined in src/TextAnnotation.ts:58

___

####  confidence

• **confidence**: *number*

Defined in src/TextAnnotation.ts:59

___

####  id

• **id**: *string*

Defined in src/TextAnnotation.ts:57


<a name="interfaces_textannotation_textannotationmd"></a>

[functional-types](#globalsmd) › ["TextAnnotation"](#modules_textannotation_md) › [TextAnnotation](#interfaces_textannotation_textannotationmd)

## Interface: TextAnnotation

### Hierarchy

* **TextAnnotation**

### Index

#### Properties

* [created_at](#created_at)
* [file](#file)
* [id](#id)
* [pages](#pages)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *string*

Defined in src/TextAnnotation.ts:75

___

####  file

• **file**: *string*

Defined in src/TextAnnotation.ts:73

___

####  id

• **id**: *string*

Defined in src/TextAnnotation.ts:72

___

####  pages

• **pages**: *[Page](#interfaces_textannotation_pagemd)[]*

Defined in src/TextAnnotation.ts:74

___

####  updated_at

• **updated_at**: *string*

Defined in src/TextAnnotation.ts:76


<a name="interfaces_textannotation_wordmd"></a>

[functional-types](#globalsmd) › ["TextAnnotation"](#modules_textannotation_md) › [Word](#interfaces_textannotation_wordmd)

## Interface: Word

### Hierarchy

* **Word**

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [breakType](#breaktype)
* [confidence](#confidence)
* [id](#id)
* [paragraph](#paragraph)
* [text](#text)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

Defined in src/TextAnnotation.ts:51

___

####  breakType

• **breakType**: *[BreakType](#breaktype)*

Defined in src/TextAnnotation.ts:50

___

####  confidence

• **confidence**: *number*

Defined in src/TextAnnotation.ts:53

___

####  id

• **id**: *string*

Defined in src/TextAnnotation.ts:48

___

####  paragraph

• **paragraph**: *string*

Defined in src/TextAnnotation.ts:49

___

####  text

• **text**: *string*

Defined in src/TextAnnotation.ts:52


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


<a name="interfaces_vision_annotateimagerequestmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [AnnotateImageRequest](#interfaces_vision_annotateimagerequestmd)

## Interface: AnnotateImageRequest

### Hierarchy

* **AnnotateImageRequest**

### Index

#### Properties

* [features](#optional-features)
* [image](#image)
* [imageContext](#optional-imagecontext)

### Properties

#### `Optional` features

• **features**? : *[Feature](#interfaces_vision_featuremd)[]*

Defined in src/Vision.ts:48

___

####  image

• **image**: *[Image](#interfaces_vision_imagemd)*

Defined in src/Vision.ts:47

___

#### `Optional` imageContext

• **imageContext**? : *[ImageContext](#interfaces_vision_imagecontextmd)*

Defined in src/Vision.ts:49


<a name="interfaces_vision_annotateimageresponsemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd)

## Interface: AnnotateImageResponse

### Hierarchy

* **AnnotateImageResponse**

### Index

#### Properties

* [fullTextAnnotation](#optional-fulltextannotation)
* [labelAnnotations](#optional-labelannotations)
* [textAnnotations](#optional-textannotations)

### Properties

#### `Optional` fullTextAnnotation

• **fullTextAnnotation**? : *[TextAnnotation](#interfaces_vision_textannotationmd)*

Defined in src/Vision.ts:63

___

#### `Optional` labelAnnotations

• **labelAnnotations**? : *[EntityAnnotation](#interfaces_vision_entityannotationmd)[]*

Defined in src/Vision.ts:54

___

#### `Optional` textAnnotations

• **textAnnotations**? : *[EntityAnnotation](#interfaces_vision_entityannotationmd)[]*

Defined in src/Vision.ts:57


<a name="interfaces_vision_asyncannotatefilerequestmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd)

## Interface: AsyncAnnotateFileRequest

### Hierarchy

* **AsyncAnnotateFileRequest**

### Index

#### Properties

* [features](#features)
* [imageContext](#optional-imagecontext)
* [inputConfig](#inputconfig)
* [outputConfig](#outputconfig)
* [responses](#optional-responses)

### Properties

####  features

• **features**: *[Feature](#interfaces_vision_featuremd)[]*

Defined in src/Vision.ts:16

___

#### `Optional` imageContext

• **imageContext**? : *[ImageContext](#interfaces_vision_imagecontextmd)*

Defined in src/Vision.ts:17

___

####  inputConfig

• **inputConfig**: *[InputConfig](#interfaces_vision_inputconfigmd)*

Defined in src/Vision.ts:15

___

####  outputConfig

• **outputConfig**: *[OutputConfig](#interfaces_vision_outputconfigmd)*

Defined in src/Vision.ts:18

___

#### `Optional` responses

• **responses**? : *[AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd)[]*

Defined in src/Vision.ts:19


<a name="interfaces_vision_blockmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Block](#interfaces_vision_blockmd)

## Interface: Block

### Hierarchy

* **Block**

### Index

#### Properties

* [blockType](#blocktype)
* [boundingBox](#boundingbox)
* [confidence](#optional-confidence)
* [paragraphs](#paragraphs)
* [property](#optional-property)

### Properties

####  blockType

• **blockType**: *[BlockType](#blocktype)*

Defined in src/Vision.ts:152

___

####  boundingBox

• **boundingBox**: *[BoundingPoly](#interfaces_vision_boundingpolymd)*

Defined in src/Vision.ts:150

___

#### `Optional` confidence

• **confidence**? : *number*

Defined in src/Vision.ts:153

___

####  paragraphs

• **paragraphs**: *[Paragraph](#interfaces_vision_paragraphmd)[]*

Defined in src/Vision.ts:151

___

#### `Optional` property

• **property**? : *[TextProperty](#interfaces_vision_textpropertymd)*

Defined in src/Vision.ts:139


<a name="interfaces_vision_boundingpolymd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [BoundingPoly](#interfaces_vision_boundingpolymd)

## Interface: BoundingPoly

### Hierarchy

* **BoundingPoly**

### Index

#### Properties

* [normalizedVertices](#optional-normalizedvertices)
* [vertices](#optional-vertices)

### Properties

#### `Optional` normalizedVertices

• **normalizedVertices**? : *[NormalizedVertex](#interfaces_vision_normalizedvertexmd)[]*

Defined in src/Vision.ts:212

___

#### `Optional` vertices

• **vertices**? : *[Vertex](#interfaces_vision_vertexmd)[]*

Defined in src/Vision.ts:211


<a name="interfaces_vision_detectedbreakmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [DetectedBreak](#interfaces_vision_detectedbreakmd)

## Interface: DetectedBreak

### Hierarchy

* **DetectedBreak**

### Index

#### Properties

* [isPrefix](#optional-isprefix)
* [type](#type)

### Properties

#### `Optional` isPrefix

• **isPrefix**? : *boolean*

Defined in src/Vision.ts:199

___

####  type

• **type**: *[BreakType](#breaktype)*

Defined in src/Vision.ts:196


<a name="interfaces_vision_detectedlanguagemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [DetectedLanguage](#interfaces_vision_detectedlanguagemd)

## Interface: DetectedLanguage

### Hierarchy

* **DetectedLanguage**

### Index

#### Properties

* [confidence](#optional-confidence)
* [languageCode](#languagecode)

### Properties

#### `Optional` confidence

• **confidence**? : *number*

Defined in src/Vision.ts:192

___

####  languageCode

• **languageCode**: *string*

Defined in src/Vision.ts:191


<a name="interfaces_vision_entityannotationmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [EntityAnnotation](#interfaces_vision_entityannotationmd)

## Interface: EntityAnnotation

### Hierarchy

* **EntityAnnotation**

### Index

#### Properties

* [boundingPoly](#optional-boundingpoly)
* [confidence](#confidence)
* [description](#description)
* [locale](#locale)
* [locations](#locations)
* [mid](#mid)
* [properties](#properties)
* [score](#score)
* [topicality](#topicality)

### Properties

#### `Optional` boundingPoly

• **boundingPoly**? : *[BoundingPoly](#interfaces_vision_boundingpolymd)*

Defined in src/Vision.ts:99

___

####  confidence

• **confidence**: *number*

Defined in src/Vision.ts:97

___

####  description

• **description**: *string*

Defined in src/Vision.ts:95

___

####  locale

• **locale**: *string*

Defined in src/Vision.ts:94

___

####  locations

• **locations**: *[LocationInfo](#interfaces_vision_locationinfomd)[]*

Defined in src/Vision.ts:100

___

####  mid

• **mid**: *string*

Defined in src/Vision.ts:93

___

####  properties

• **properties**: *[Property](#interfaces_vision_propertymd)[]*

Defined in src/Vision.ts:101

___

####  score

• **score**: *number*

Defined in src/Vision.ts:96

___

####  topicality

• **topicality**: *number*

Defined in src/Vision.ts:98


<a name="interfaces_vision_featuremd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Feature](#interfaces_vision_featuremd)

## Interface: Feature

### Hierarchy

* **Feature**

### Index

#### Properties

* [maxResult](#optional-maxresult)
* [model](#optional-model)
* [type](#type)

### Properties

#### `Optional` maxResult

• **maxResult**? : *number*

Defined in src/Vision.ts:78

___

#### `Optional` model

• **model**? : *"builtin/stable" | "builtin/latest"*

Defined in src/Vision.ts:79

___

####  type

• **type**: *[Type](#type)*

Defined in src/Vision.ts:77


<a name="interfaces_vision_gcsdestinationmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [GcsDestination](#interfaces_vision_gcsdestinationmd)

## Interface: GcsDestination

### Hierarchy

* **GcsDestination**

### Index

#### Properties

* [uri](#uri)

### Properties

####  uri

• **uri**: *string*

Defined in src/Vision.ts:43


<a name="interfaces_vision_gcssourcemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [GcsSource](#interfaces_vision_gcssourcemd)

## Interface: GcsSource

### Hierarchy

* **GcsSource**

### Index

#### Properties

* [uri](#uri)

### Properties

####  uri

• **uri**: *string*

Defined in src/Vision.ts:29


<a name="interfaces_vision_imagemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Image](#interfaces_vision_imagemd)

## Interface: Image

### Hierarchy

* **Image**

### Index

#### Properties

* [content](#optional-content)
* [source](#optional-source)

### Properties

#### `Optional` content

• **content**? : *Buffer*

Defined in src/Vision.ts:67

___

#### `Optional` source

• **source**? : *[ImageSource](#interfaces_vision_imagesourcemd)*

Defined in src/Vision.ts:68


<a name="interfaces_vision_imagecontextmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [ImageContext](#interfaces_vision_imagecontextmd)

## Interface: ImageContext

### Hierarchy

* **ImageContext**

### Index

#### Properties

* [cropHintsParams](#crophintsparams)
* [languageHints](#languagehints)
* [latLongRect](#latlongrect)
* [productSearchParams](#productsearchparams)
* [webDetectionParams](#webdetectionparams)

### Properties

####  cropHintsParams

• **cropHintsParams**: *unknown*

Defined in src/Vision.ts:87

___

####  languageHints

• **languageHints**: *string[]*

Defined in src/Vision.ts:86

___

####  latLongRect

• **latLongRect**: *unknown*

Defined in src/Vision.ts:85

___

####  productSearchParams

• **productSearchParams**: *unknown*

Defined in src/Vision.ts:88

___

####  webDetectionParams

• **webDetectionParams**: *unknown*

Defined in src/Vision.ts:89


<a name="interfaces_vision_imagesourcemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [ImageSource](#interfaces_vision_imagesourcemd)

## Interface: ImageSource

### Hierarchy

* **ImageSource**

### Index

#### Properties

* [gcsImageUri](#optional-gcsimageuri)
* [imageUri](#optional-imageuri)

### Properties

#### `Optional` gcsImageUri

• **gcsImageUri**? : *string*

Defined in src/Vision.ts:72

___

#### `Optional` imageUri

• **imageUri**? : *string*

Defined in src/Vision.ts:73


<a name="interfaces_vision_inputconfigmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [InputConfig](#interfaces_vision_inputconfigmd)

## Interface: InputConfig

### Hierarchy

* **InputConfig**

### Index

#### Properties

* [content](#optional-content)
* [gcsSource](#gcssource)
* [mimeType](#mimetype)

### Properties

#### `Optional` content

• **content**? : *Buffer*

Defined in src/Vision.ts:24

___

####  gcsSource

• **gcsSource**: *[GcsSource](#interfaces_vision_gcssourcemd)*

Defined in src/Vision.ts:23

___

####  mimeType

• **mimeType**: *string*

Defined in src/Vision.ts:25


<a name="interfaces_vision_latlngmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [LatLng](#interfaces_vision_latlngmd)

## Interface: LatLng

### Hierarchy

* **LatLng**

### Index

#### Properties

* [latitude](#latitude)
* [longitude](#longitude)

### Properties

####  latitude

• **latitude**: *number*

Defined in src/Vision.ts:250

___

####  longitude

• **longitude**: *number*

Defined in src/Vision.ts:252


<a name="interfaces_vision_locationinfomd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [LocationInfo](#interfaces_vision_locationinfomd)

## Interface: LocationInfo

### Hierarchy

* **LocationInfo**

### Index

#### Properties

* [latLng](#latlng)

### Properties

####  latLng

• **latLng**: *[LatLng](#interfaces_vision_latlngmd)*

Defined in src/Vision.ts:216


<a name="interfaces_vision_normalizedvertexmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [NormalizedVertex](#interfaces_vision_normalizedvertexmd)

## Interface: NormalizedVertex

### Hierarchy

* [Vertex](#interfaces_vision_vertexmd)

  ↳ **NormalizedVertex**

### Index

#### Properties

* [x](#x)
* [y](#y)

### Properties

####  x

• **x**: *number*

*Overrides [Vertex](#interfaces_vision_vertexmd).[x](#x)*

Defined in src/Vision.ts:239

___

####  y

• **y**: *number*

*Overrides [Vertex](#interfaces_vision_vertexmd).[y](#y)*

Defined in src/Vision.ts:240


<a name="interfaces_vision_outputconfigmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [OutputConfig](#interfaces_vision_outputconfigmd)

## Interface: OutputConfig

### Hierarchy

* **OutputConfig**

### Index

#### Properties

* [batchSize](#optional-batchsize)
* [gcsDestination](#gcsdestination)

### Properties

#### `Optional` batchSize

• **batchSize**? : *number*

Defined in src/Vision.ts:38

___

####  gcsDestination

• **gcsDestination**: *[GcsDestination](#interfaces_vision_gcsdestinationmd)*

Defined in src/Vision.ts:39


<a name="interfaces_vision_pagemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Page](#interfaces_vision_pagemd)

## Interface: Page

### Hierarchy

* **Page**

### Index

#### Properties

* [blocks](#blocks)
* [confidence](#optional-confidence)
* [height](#height)
* [property](#property)
* [width](#width)

### Properties

####  blocks

• **blocks**: *[Block](#interfaces_vision_blockmd)[]*

Defined in src/Vision.ts:127

___

#### `Optional` confidence

• **confidence**? : *number*

Defined in src/Vision.ts:130

___

####  height

• **height**: *number*

Defined in src/Vision.ts:125

___

####  property

• **property**: *[TextProperty](#interfaces_vision_textpropertymd)*

Defined in src/Vision.ts:118

___

####  width

• **width**: *number*

Defined in src/Vision.ts:124


<a name="interfaces_vision_paragraphmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Paragraph](#interfaces_vision_paragraphmd)

## Interface: Paragraph

### Hierarchy

* **Paragraph**

### Index

#### Properties

* [boundingBox](#boundingbox)
* [confidence](#confidence)
* [property](#optional-property)
* [words](#words)

### Properties

####  boundingBox

• **boundingBox**: *[BoundingPoly](#interfaces_vision_boundingpolymd)*

Defined in src/Vision.ts:158

___

####  confidence

• **confidence**: *number*

Defined in src/Vision.ts:160

___

#### `Optional` property

• **property**? : *[TextProperty](#interfaces_vision_textpropertymd)*

Defined in src/Vision.ts:157

___

####  words

• **words**: *[Word](#interfaces_vision_wordmd)[]*

Defined in src/Vision.ts:159


<a name="interfaces_vision_propertymd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Property](#interfaces_vision_propertymd)

## Interface: Property

### Hierarchy

* **Property**

### Index

#### Properties

* [name](#name)
* [uint64Value](#uint64value)
* [value](#value)

### Properties

####  name

• **name**: *string*

Defined in src/Vision.ts:220

___

####  uint64Value

• **uint64Value**: *number*

Defined in src/Vision.ts:222

___

####  value

• **value**: *string*

Defined in src/Vision.ts:221


<a name="interfaces_vision_textannotationmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [TextAnnotation](#interfaces_vision_textannotationmd)

## Interface: TextAnnotation

### Hierarchy

* **TextAnnotation**

### Index

#### Properties

* [pages](#pages)
* [text](#text)

### Properties

####  pages

• **pages**: *[Page](#interfaces_vision_pagemd)[]*

Defined in src/Vision.ts:110

___

####  text

• **text**: *string*

Defined in src/Vision.ts:113


<a name="interfaces_vision_textpropertymd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [TextProperty](#interfaces_vision_textpropertymd)

## Interface: TextProperty

### Hierarchy

* **TextProperty**

### Index

#### Properties

* [detectedBreak](#optional-detectedbreak)
* [detectedLanguages](#detectedlanguages)

### Properties

#### `Optional` detectedBreak

• **detectedBreak**? : *[DetectedBreak](#interfaces_vision_detectedbreakmd)*

Defined in src/Vision.ts:135

___

####  detectedLanguages

• **detectedLanguages**: *[DetectedLanguage](#interfaces_vision_detectedlanguagemd)[]*

Defined in src/Vision.ts:134


<a name="interfaces_vision_textsymbolmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [TextSymbol](#interfaces_vision_textsymbolmd)

## Interface: TextSymbol

### Hierarchy

* **TextSymbol**

### Index

#### Properties

* [boundingBox](#optional-boundingbox)
* [confidence](#confidence)
* [property](#property)
* [text](#text)

### Properties

#### `Optional` boundingBox

• **boundingBox**? : *[BoundingPoly](#interfaces_vision_boundingpolymd)*

Defined in src/Vision.ts:181

___

####  confidence

• **confidence**: *number*

Defined in src/Vision.ts:183

___

####  property

• **property**: *[TextProperty](#interfaces_vision_textpropertymd)*

Defined in src/Vision.ts:180

___

####  text

• **text**: *string*

Defined in src/Vision.ts:182


<a name="interfaces_vision_vertexmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Vertex](#interfaces_vision_vertexmd)

## Interface: Vertex

### Hierarchy

* **Vertex**

  ↳ [NormalizedVertex](#interfaces_vision_normalizedvertexmd)

### Index

#### Properties

* [x](#x)
* [y](#y)

### Properties

####  x

• **x**: *number*

Defined in src/Vision.ts:230

___

####  y

• **y**: *number*

Defined in src/Vision.ts:231


<a name="interfaces_vision_wordmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Word](#interfaces_vision_wordmd)

## Interface: Word

### Hierarchy

* **Word**

### Index

#### Properties

* [boundingBox](#boundingbox)
* [confidence](#confidence)
* [property](#optional-property)
* [symbols](#symbols)

### Properties

####  boundingBox

• **boundingBox**: *[BoundingPoly](#interfaces_vision_boundingpolymd)*

Defined in src/Vision.ts:174

___

####  confidence

• **confidence**: *number*

Defined in src/Vision.ts:176

___

#### `Optional` property

• **property**? : *[TextProperty](#interfaces_vision_textpropertymd)*

Defined in src/Vision.ts:173

___

####  symbols

• **symbols**: *[TextSymbol](#interfaces_vision_textsymbolmd)[]*

Defined in src/Vision.ts:175

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
* [Reference](#interfaces_folder_index_referencemd)

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
* [isReference](#const-isreference)
* [make](#const-make)

### Type aliases

####  File

Ƭ **File**: *[Attributes](#interfaces_folder_index_attributesmd) & object*

Defined in src/Folder/index.ts:52

___

####  FilesByType

Ƭ **FilesByType**: *Record‹FT.DocumentType, [File](#file)[]›*

Defined in src/Folder/index.ts:54

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

Defined in src/Folder/index.ts:161

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

Defined in src/Folder/index.ts:184

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

Defined in src/Folder/index.ts:134

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

Defined in src/Folder/index.ts:142

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

Defined in src/Folder/index.ts:150

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

Defined in src/Folder/index.ts:61

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

Defined in src/Folder/index.ts:111

```haskell
isMetadata :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Metadata*

___

#### `Const` isReference

▸ **isReference**(`a`: unknown): *a is Reference*

Defined in src/Folder/index.ts:205

```haskell
isReference :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Reference*

___

#### `Const` make

▸ **make**(`name`: string): *(Anonymous function)*

Defined in src/Folder/index.ts:75

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


<a name="modules_textannotation_md"></a>

[functional-types](#globalsmd) › ["TextAnnotation"](#modules_textannotation_md)

## Module: "TextAnnotation"

### Index

#### Interfaces

* [Page](#interfaces_textannotation_pagemd)
* [Paragraph](#interfaces_textannotation_paragraphmd)
* [TextAnnotation](#interfaces_textannotation_textannotationmd)
* [Word](#interfaces_textannotation_wordmd)

#### Type aliases

* [BreakType](#breaktype)
* [ParagraphsById](#paragraphsbyid)
* [WordsById](#wordsbyid)

#### Variables

* [breakTypes](#const-breaktypes)
* [fromAnnotateImageResponse](#const-fromannotateimageresponse)
* [fromVisionPage](#const-fromvisionpage)
* [getBreakTypeFromSymbols](#const-getbreaktypefromsymbols)

#### Functions

* [fromAnnotateImageRequest](#const-fromannotateimagerequest)
* [fromVisionParagraph](#const-fromvisionparagraph)
* [fromVisionWord](#const-fromvisionword)
* [isBreakType](#const-isbreaktype)
* [isPage](#const-ispage)
* [isPages](#const-ispages)
* [isParagraph](#const-isparagraph)
* [isParagraphsById](#const-isparagraphsbyid)
* [isTextAnnotation](#const-istextannotation)
* [isWord](#const-isword)
* [isWordsById](#const-iswordsbyid)

### Type aliases

####  BreakType

Ƭ **BreakType**: *"UNKNOWN" | "SPACE" | "SURE_SPACE" | "EOL_SURE_SPACE" | "HYPHEN" | "LINE_BREAK"*

Defined in src/TextAnnotation.ts:30

___

####  ParagraphsById

Ƭ **ParagraphsById**: *Dictionary‹[Paragraph](#interfaces_textannotation_paragraphmd)›*

Defined in src/TextAnnotation.ts:64

___

####  WordsById

Ƭ **WordsById**: *Dictionary‹[Word](#interfaces_textannotation_wordmd)›*

Defined in src/TextAnnotation.ts:62

### Variables

#### `Const` breakTypes

• **breakTypes**: *[BreakType](#breaktype)[]* = [
  'UNKNOWN',
  'SPACE',
  'SURE_SPACE', // Sure space (very wide)
  'EOL_SURE_SPACE', // Line-wrapping break
  'HYPHEN', // End-line hyphen that is not present in text
  'LINE_BREAK',
]

Defined in src/TextAnnotation.ts:38

___

#### `Const` fromAnnotateImageResponse

• **fromAnnotateImageResponse**: *function* = pipe(
  Vision.getPagesFromAnnotateImageResponse,
  map(fromVisionPage),
  A.array.sequence(IO.io)
)

Defined in src/TextAnnotation.ts:276

```haskell
fromAnnotateImageResponse :: AnnotateImageResponse -> IO [Page]
```

##### Type declaration:

▸ (`response`: [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd)): *IO‹[Page](#interfaces_textannotation_pagemd)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd) |

___

#### `Const` fromVisionPage

• **fromVisionPage**: *function* = pipe(
  Vision.getParagraphsFromPage,
  map(fromVisionParagraph),
  A.array.sequence(IO.io),
  IO.map(
    reduce<Page, Page>((acc: Page, page: Page) => mergeDeepLeft(acc, page), {
      wordsById: {},
      paragraphsById: {},
    })
  )
)

Defined in src/TextAnnotation.ts:259

```haskell
fromVisionPage :: VisionPage -> IO Page
```

##### Type declaration:

▸ (`page`: [Page](#interfaces_vision_pagemd)): *IO‹[Page](#interfaces_textannotation_pagemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`page` | [Page](#interfaces_vision_pagemd) |

___

#### `Const` getBreakTypeFromSymbols

• **getBreakTypeFromSymbols**: *function* = pipe(
  last,
  path(['property', 'detectedBreak', 'type']),
  O.fromPredicate(isBreakType),
  O.getOrElse(() => 'UNKNOWN')
)

Defined in src/TextAnnotation.ts:168

```haskell
getBreakTypeFromSymbols :: [VisionSymbol] -> DetectedBreak
```

##### Type declaration:

▸ (`symbols`: [TextSymbol](#interfaces_vision_textsymbolmd)[]): *[BreakType](#breaktype)*

**Parameters:**

Name | Type |
------ | ------ |
`symbols` | [TextSymbol](#interfaces_vision_textsymbolmd)[] |

### Functions

#### `Const` fromAnnotateImageRequest

▸ **fromAnnotateImageRequest**(`request`: [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd)): *(Anonymous function)*

Defined in src/TextAnnotation.ts:290

```haskell
fromAnnotateImageRequest :: AsyncAnnotateFileRequest -> IO [Page]
```

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` fromVisionParagraph

▸ **fromVisionParagraph**(`visionParagraph`: [Paragraph](#interfaces_vision_paragraphmd)): *(Anonymous function)*

Defined in src/TextAnnotation.ts:222

```haskell
fromVisionParagraph :: VisionParagraph -> IO Page
```

**Parameters:**

Name | Type |
------ | ------ |
`visionParagraph` | [Paragraph](#interfaces_vision_paragraphmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` fromVisionWord

▸ **fromVisionWord**(`word`: [Word](#interfaces_vision_wordmd)): *(Anonymous function)*

Defined in src/TextAnnotation.ts:203

```haskell
fromVisionWord :: VisionWord -> Word
```

**Parameters:**

Name | Type |
------ | ------ |
`word` | [Word](#interfaces_vision_wordmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` isBreakType

▸ **isBreakType**(`a`: unknown): *a is BreakType*

Defined in src/TextAnnotation.ts:84

```haskell
isBreakType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is BreakType*

___

#### `Const` isPage

▸ **isPage**(`a`: unknown): *a is Page*

Defined in src/TextAnnotation.ts:135

```haskell
isPage :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Page*

___

#### `Const` isPages

▸ **isPages**(`a`: unknown): *a is Page*

Defined in src/TextAnnotation.ts:146

```haskell
isPages :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Page*

___

#### `Const` isParagraph

▸ **isParagraph**(`a`: unknown): *a is Paragraph*

Defined in src/TextAnnotation.ts:107

```haskell
isParagraph :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Paragraph*

___

#### `Const` isParagraphsById

▸ **isParagraphsById**(`a`: unknown): *a is ParagraphsById*

Defined in src/TextAnnotation.ts:127

```haskell
isWordsById :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ParagraphsById*

___

#### `Const` isTextAnnotation

▸ **isTextAnnotation**(`a`: unknown): *a is TextAnnotation*

Defined in src/TextAnnotation.ts:154

```haskell
isTextAnnotation :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is TextAnnotation*

___

#### `Const` isWord

▸ **isWord**(`a`: unknown): *a is Word*

Defined in src/TextAnnotation.ts:92

```haskell
isWord :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Word*

___

#### `Const` isWordsById

▸ **isWordsById**(`a`: unknown): *a is WordsById*

Defined in src/TextAnnotation.ts:119

```haskell
isWordsById :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is WordsById*


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


<a name="modules_vision_md"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md)

## Module: "Vision"

### Index

#### Interfaces

* [AnnotateImageRequest](#interfaces_vision_annotateimagerequestmd)
* [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd)
* [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd)
* [Block](#interfaces_vision_blockmd)
* [BoundingPoly](#interfaces_vision_boundingpolymd)
* [DetectedBreak](#interfaces_vision_detectedbreakmd)
* [DetectedLanguage](#interfaces_vision_detectedlanguagemd)
* [EntityAnnotation](#interfaces_vision_entityannotationmd)
* [Feature](#interfaces_vision_featuremd)
* [GcsDestination](#interfaces_vision_gcsdestinationmd)
* [GcsSource](#interfaces_vision_gcssourcemd)
* [Image](#interfaces_vision_imagemd)
* [ImageContext](#interfaces_vision_imagecontextmd)
* [ImageSource](#interfaces_vision_imagesourcemd)
* [InputConfig](#interfaces_vision_inputconfigmd)
* [LatLng](#interfaces_vision_latlngmd)
* [LocationInfo](#interfaces_vision_locationinfomd)
* [NormalizedVertex](#interfaces_vision_normalizedvertexmd)
* [OutputConfig](#interfaces_vision_outputconfigmd)
* [Page](#interfaces_vision_pagemd)
* [Paragraph](#interfaces_vision_paragraphmd)
* [Property](#interfaces_vision_propertymd)
* [TextAnnotation](#interfaces_vision_textannotationmd)
* [TextProperty](#interfaces_vision_textpropertymd)
* [TextSymbol](#interfaces_vision_textsymbolmd)
* [Vertex](#interfaces_vision_vertexmd)
* [Word](#interfaces_vision_wordmd)

#### Type aliases

* [BlockType](#blocktype)
* [BreakType](#breaktype)
* [Type](#type)

#### Variables

* [getBlocksFromPage](#const-getblocksfrompage)
* [getFileIdFromAnnotateImageRequest](#const-getfileidfromannotateimagerequest)
* [getPagesFromAnnotateImageRequest](#const-getpagesfromannotateimagerequest)
* [getPagesFromAnnotateImageResponse](#const-getpagesfromannotateimageresponse)
* [getParagraphsFromBlock](#const-getparagraphsfromblock)
* [getParagraphsFromPage](#const-getparagraphsfrompage)
* [getSymbolsFromWord](#const-getsymbolsfromword)
* [getTextFromSymbol](#const-gettextfromsymbol)
* [getTextFromWord](#const-gettextfromword)
* [getWordsFromPage](#const-getwordsfrompage)
* [getWordsFromParagraph](#const-getwordsfromparagraph)

### Type aliases

####  BlockType

Ƭ **BlockType**: *"UNKNOWN" | "TEXT" | "TABLE" | "PICTURE" | "RULER" | "BARCODE" | string*

Defined in src/Vision.ts:163

___

####  BreakType

Ƭ **BreakType**: *"UNKNOWN" | "SPACE" | "SURE_SPACE" | "EOL_SURE_SPACE" | "HYPHEN" | "LINE_BREAK"*

Defined in src/Vision.ts:202

___

####  Type

Ƭ **Type**: *string*

Defined in src/Vision.ts:82

### Variables

#### `Const` getBlocksFromPage

• **getBlocksFromPage**: *function* = R.prop('blocks')

Defined in src/Vision.ts:305

```haskell
getBlocksFromPage :: Page -> [Block]
```

##### Type declaration:

▸ (`page`: [Page](#interfaces_vision_pagemd)): *[Block](#interfaces_vision_blockmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`page` | [Page](#interfaces_vision_pagemd) |

___

#### `Const` getFileIdFromAnnotateImageRequest

• **getFileIdFromAnnotateImageRequest**: *function* = pipe(
  path<string>(['inputConfig', 'gcsSource', 'uri']),
  split('/'),
  takeLast(2) as (segments: string[]) => string[],
  join('/')
)

Defined in src/Vision.ts:360

```haskell
getFileIdFromAnnotateImageRequest :: AnnotateImageRequest -> String
```

##### Type declaration:

▸ (`request`: [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd) |

___

#### `Const` getPagesFromAnnotateImageRequest

• **getPagesFromAnnotateImageRequest**: *function* = pipe(
  prop('responses') as (
    request: AsyncAnnotateFileRequest
  ) => AsyncAnnotateFileRequest['responses'],
  defaultTo([]),
  map(getPagesFromAnnotateImageResponse),
  unnest
)

Defined in src/Vision.ts:344

```haskell
getPagesFromAnnotateImageRequest :: AnnotateImageRequest -> [Page]
```

##### Type declaration:

▸ (`request`: [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd)): *[Page](#interfaces_vision_pagemd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd) |

___

#### `Const` getPagesFromAnnotateImageResponse

• **getPagesFromAnnotateImageResponse**: *function* = pipe(
  path(['fullTextAnnotation', 'pages']),
  defaultTo([]) as (pages: Page[] | undefined) => Page[]
)

Defined in src/Vision.ts:332

```haskell
getPagesFromAnnotateImageResponse :: AnnotateImageResponse -> [Page]
```

##### Type declaration:

▸ (`response`: [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd)): *[Page](#interfaces_vision_pagemd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd) |

___

#### `Const` getParagraphsFromBlock

• **getParagraphsFromBlock**: *function* = R.prop(
  'paragraphs'
)

Defined in src/Vision.ts:296

```haskell
getParagraphsFromBlock :: Block -> [Paragraph]
```

##### Type declaration:

▸ (`block`: [Block](#interfaces_vision_blockmd)): *[Paragraph](#interfaces_vision_paragraphmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`block` | [Block](#interfaces_vision_blockmd) |

___

#### `Const` getParagraphsFromPage

• **getParagraphsFromPage**: *function* = R.pipe(
  getBlocksFromPage,
  R.chain(getParagraphsFromBlock)
)

Defined in src/Vision.ts:312

```haskell
getParagraphsFromPage :: Page -> [Paragraph]
```

##### Type declaration:

▸ (`page`: [Page](#interfaces_vision_pagemd)): *[Paragraph](#interfaces_vision_paragraphmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`page` | [Page](#interfaces_vision_pagemd) |

___

#### `Const` getSymbolsFromWord

• **getSymbolsFromWord**: *function* = R.prop(
  'symbols'
)

Defined in src/Vision.ts:267

```haskell
getSymbolsFromWord :: Word -> [TextSymbol]
```

##### Type declaration:

▸ (`word`: [Word](#interfaces_vision_wordmd)): *[TextSymbol](#interfaces_vision_textsymbolmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`word` | [Word](#interfaces_vision_wordmd) |

___

#### `Const` getTextFromSymbol

• **getTextFromSymbol**: *function* = R.prop('text')

Defined in src/Vision.ts:260

```haskell
getTextFromSymbol :: TextSymbol -> String
```

##### Type declaration:

▸ (`symbol`: [TextSymbol](#interfaces_vision_textsymbolmd)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`symbol` | [TextSymbol](#interfaces_vision_textsymbolmd) |

___

#### `Const` getTextFromWord

• **getTextFromWord**: *function* = R.pipe(
  getSymbolsFromWord,
  R.map(getTextFromSymbol),
  R.join('')
)

Defined in src/Vision.ts:276

```haskell
getTextFromWord :: Word -> String
```

##### Type declaration:

▸ (`word`: [Word](#interfaces_vision_wordmd)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`word` | [Word](#interfaces_vision_wordmd) |

___

#### `Const` getWordsFromPage

• **getWordsFromPage**: *function* = R.pipe(
  getParagraphsFromPage,
  R.chain(getWordsFromParagraph)
)

Defined in src/Vision.ts:322

```haskell
getWordsFromPage :: Page -> [Word]
```

##### Type declaration:

▸ (`page`: [Page](#interfaces_vision_pagemd)): *[Word](#interfaces_vision_wordmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`page` | [Page](#interfaces_vision_pagemd) |

___

#### `Const` getWordsFromParagraph

• **getWordsFromParagraph**: *function* = R.prop(
  'words'
)

Defined in src/Vision.ts:287

```haskell
getWordsFromParagraph :: Paragraph -> [Word]
```

##### Type declaration:

▸ (`paragraph`: [Paragraph](#interfaces_vision_paragraphmd)): *[Word](#interfaces_vision_wordmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`paragraph` | [Paragraph](#interfaces_vision_paragraphmd) |

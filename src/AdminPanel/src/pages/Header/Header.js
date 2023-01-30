import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Header.scss";
import adminAxiosInstance from "../../config/index";
import { Form, Formik } from "formik";

const Header = () => {
  const [error, setError] = useState(0);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [headArr, setHeadArr] = useState([""]);
  const [bodyArr, setBodyArr] = useState([""]);
  const { id } = useParams();

  // console.log("id", id);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await adminAxiosInstance.get(`title/getAll?type=${id}`);
      if (response?.status === 200) {
        setData(response?.data.data[0]);
        if (response?.data?.data[0]?.head && response?.data?.data[0]?.body) {
          setHeadArr(response?.data?.data[0]?.head);
          setBodyArr(response?.data?.data[0]?.body);
        }
        setError(200);
        setLoading(false);
      }
    } catch (error) {
      if (error?.response.status === 404) {
        setLoading(false);
        setError(404);
      } else {
        setLoading(false);
        setError(500);
      }
    }
  };

  const handleSubmit = async (values) => {
    const newHeadArr = headArr.filter((e) => {
      return e !== "";
    });
    const newBodyArr = bodyArr.filter((e) => {
      return e !== "";
    });
    values.type = id;
    if (id === "globalScriptTitle") {
      values.head = newHeadArr;
      values.body = newBodyArr;
    }
    try {
      const response = await adminAxiosInstance.post(`title/add?type=${id}`, {
        ...values,
      });
      if (response.status === 200) {
        fetchData();
      }
    } catch (error) { }
  };

  const addInput = (id) => {
    if (id === "head") {
      setHeadArr([...headArr, ""]);
    } else setBodyArr([...bodyArr, ""]);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      {loading === true ? (
        <div className="loader-content">
          <div className="spinner-border text-secondary"></div>
        </div>
      ) : (
        <>
          <div className="fs-2 mb-3 text-capitalize">{id}</div>
          <Formik
            initialValues={{
              metaTitle: "" || data?.metaTitle,
              metaDescription: "" || data?.metaDescription,
              metaKeywords: "" || data?.metaKeywords,
              metaRobots: "" || data?.metaRobots,
              canonicalTag: "" || data?.canonicalTag,
              schemaMarkup: "" || data?.schemaMarkup,
              ogTitle: "" || data?.ogTitle,
              ogType: "" || data?.ogType,
              ogUrl: "" || data?.ogUrl,
              ogImage: "" || data?.ogImage,
              ogDescription: "" || data?.ogDescription,
            }}
            onSubmit={handleSubmit}>
            {({ values, handleChange, handleBlur }) => (
              <Form>
                {id === "globalScriptTitle" ? (
                  <>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="head" className="fw-bold mb-2">
                          Head
                        </label>
                      </div>
                      <div>
                        {headArr &&
                          headArr.map((item, index) => (
                            <textarea
                              key={index}
                              cols={100}
                              rows={4}
                              name="head"
                              id="head"
                              value={item}
                              onChange={(e) => {
                                const list = [...headArr];
                                list[index] = e.target.value;
                                setHeadArr(list);
                              }}
                            />
                          ))}
                        <button type="button" onClick={() => addInput("head")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="body" className="fw-bold mb-2">
                          Body
                        </label>
                      </div>
                      <div>
                        {bodyArr &&
                          bodyArr.map((item, index) => (
                            <textarea
                              key={index}
                              cols={100}
                              rows={4}
                              name="head"
                              id="head"
                              value={item}
                              onChange={(e) => {
                                const list = [...bodyArr];
                                list[index] = e.target.value;
                                setBodyArr(list);
                              }}
                            />
                          ))}
                        <button type="button" onClick={() => addInput("body")}>
                          +
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="metaTitle" className="fw-bold mb-2">
                          Meta Title (&lt;meta content=Enter this information
                          below name="title" &gt;&lt;/meta&gt;)
                        </label>
                      </div>
                      <div>
                        <textarea
                          cols={100}
                          rows={4}
                          name="metaTitle"
                          id="metaTitle"
                          value={values.metaTitle}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label
                          htmlFor="metaDescription"
                          className="fw-bold mb-2">
                          Meta Description
                        </label>
                      </div>
                      <div>
                        <textarea
                          cols={100}
                          rows={4}
                          name="metaDescription"
                          id="metaDescription"
                          value={values.metaDescription}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="metaKeywords" className="fw-bold mb-2">
                          Meta Keywords
                        </label>
                      </div>
                      <div>
                        <textarea
                          cols={100}
                          rows={4}
                          name="metaKeywords"
                          id="metaKeywords"
                          value={values.metaKeywords}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="metaRobots" className="fw-bold mb-2">
                          Meta Robots
                        </label>
                      </div>
                      <div>
                        <textarea
                          cols={100}
                          rows={4}
                          name="metaRobots"
                          id="metaRobots"
                          value={values.metaRobots}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="canonicalTag" className="fw-bold mb-2">
                          Canonical Tag
                        </label>
                      </div>
                      <div>
                        <textarea
                          cols={100}
                          rows={4}
                          name="canonicalTag"
                          id="canonicalTag"
                          value={values.canonicalTag}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="schemaMarkup" className="fw-bold mb-2">
                          Schema Markup
                        </label>
                      </div>
                      <div>
                        <textarea
                          cols={100}
                          rows={4}
                          name="schemaMarkup"
                          id="schemaMarkup"
                          value={values.schemaMarkup}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="ogTitle" className="fw-bold mb-2">
                          OG Title
                        </label>
                      </div>
                      <div>
                        <textarea
                          cols={100}
                          rows={4}
                          name="ogTitle"
                          id="ogTitle"
                          value={values.ogTitle}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="ogType" className="fw-bold mb-2">
                          OG Type
                        </label>
                      </div>
                      <div>
                        <textarea
                          cols={100}
                          rows={4}
                          name="ogType"
                          id="ogType"
                          value={values.ogType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="ogImage" className="fw-bold mb-2">
                          OG Image
                        </label>
                      </div>
                      <div>
                        <textarea
                          cols={100}
                          rows={4}
                          name="ogImage"
                          id="ogImage"
                          value={values.ogImage}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="ogUrl" className="fw-bold mb-2">
                          OG Url
                        </label>
                      </div>
                      <div>
                        <textarea
                          cols={100}
                          rows={4}
                          name="ogUrl"
                          id="ogUrl"
                          value={values.ogUrl}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label htmlFor="ogDescription" className="fw-bold mb-2">
                          OG Description
                        </label>
                      </div>
                      <div>
                        <textarea
                          cols={100}
                          rows={4}
                          name="ogDescription"
                          id="ogDescription"
                          value={values.ogDescription}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                  </>
                )}
                <div>
                  <button type="submit" className="meta-btn">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          {/* <form>
            <div className="mb-2">
              <textarea
                placeholder={
                  id === "globalScriptTitle" ? "Script Title" : "Meta Title"
                }
                value={title}
                cols={100}
                rows={4}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div>
              <button onClick={handleSubmit} type="button" className="meta-btn">
                Update
              </button>
            </div>
          </form> */}
        </>
      )}
    </>
  );
};

export default Header;
